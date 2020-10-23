import axios from "axios";

export const getCommitList = async (sha?: string) => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/repos/RomanKamenevIntegrio/commit-history/commits",
      {
        params: {
          sha: sha ? sha : "",
        },
      }
    );

    return data;
  } catch (error) {
    return error.message;
  }
};

export const getBranchList = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/repos/RomanKamenevIntegrio/commit-history/branches"
    );

    return data;
  } catch (error) {
    return error.message;
  }
};

export const getRepo = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/repos/RomanKamenevIntegrio/commit-history"
    );

    return data;
  } catch (error) {
    return error.message;
  }
};
