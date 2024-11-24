import axios from "axios";

export const fetchCharacters = async (page = 1) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/character?page=${page}`
  );
  return response.data;
};

export const fetchCharacterById = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/character/${id}`
  );
  return response.data;
};
