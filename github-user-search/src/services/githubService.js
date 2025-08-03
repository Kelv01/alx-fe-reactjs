import axios from "axios";

const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${githubToken}`,
    Accept: 'application/vnd.github+json'
  },
});

// 1. Regular user fetch by username
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching User ${username}:`, error);
    throw error;
  }
};

// 2. Advanced search: username, location, minRepos
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await githubApi.get(`https://api.github.com/search/users?q={query}${encodeURIComponent(query)}`);
    return response.data.items; // GitHub returns results in `items`
  } catch (error) {
    console.error("Error in advanced user search:", error);
    throw error;
  }
};
