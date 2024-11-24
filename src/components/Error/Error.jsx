import React from "react";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h2>Oops! Something went wrong.</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
