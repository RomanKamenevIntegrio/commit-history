import axios from "axios";

export const getCommitList = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/repos/RomanKamenevIntegrio/commit-history/commits"
    );

    return data;
  } catch (error) {
    return error.message;
  }
};
