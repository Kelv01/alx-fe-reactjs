import axios from "axios";

const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;


const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${githubToken}`,
  },
});

export const GetUserDetails = async () => {
  try {
    const response = await githubApi.get("/user");// torvalds
    return response.data;
  } catch (error) {
    console.error("Error fetching Github User:", error);
    throw error;
  }
};
