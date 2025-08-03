import axios from "axios";

const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;


const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${githubToken}`,
    Accept: 'application/vnd.github+json'
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);// torvalds
    return response.data;
  } catch (error) {
    console.error(`Error fetching User ${username}:`, error);
    throw error;
  }

};
