import axios from "axios";

const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${githubToken}`,
    Accept: 'application/vnd.github+json',
  },
});

// Search by username
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${username}:`, error);
    throw error;
  }
};

// Search with advanced filters
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data.items; // Returns array of user results
  } catch (error) {
    console.error(`Error with advanced search:`, error);
    throw error;
  }
};
