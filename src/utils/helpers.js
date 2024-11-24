export const getPages = (totalPages, currentPage, numButtons = 5) => {
  if (numButtons % 2 === 0) {
    throw new Error("numButtons should be an odd number.");
  }

  const pages = [];

  // If total pages are less than or equal to the number of buttons, show all pages
  if (totalPages <= numButtons) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const half = Math.floor(numButtons / 2);

    let start = currentPage - half;
    let end = currentPage + half;

    // Adjust the range if it's too close to the start or end
    if (start < 1) {
      start = 1;
      end = numButtons; // Ensure the range ends at numButtons if near the start
    }
    if (end > totalPages) {
      end = totalPages;
      start = totalPages - numButtons + 1; // Ensure the range starts correctly if near the end
    }

    // Add pages to the array
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }

  return pages;
};

export const getStatusColor = (status) => {
  switch (status) {
    case "Dead":
      return "red";
    case "Alive":
      return "green";
    default:
      return "purple";
  }
};
