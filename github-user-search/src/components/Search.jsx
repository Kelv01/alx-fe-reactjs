import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      return setError("Username is required");
    }

    setLoading(true);
    setError('');
    setUserData(null);
    setSearchResults([]);

    try {
      if (location || minRepos) {
        const users = await fetchAdvancedUsers(username, location, minRepos);
        setSearchResults(users);
      } else {
        const data = await fetchUserData(username);
        setUserData(data);
      }
    } catch (error) {
      setError("Looks like we can't find the user", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-4 py-6 max-w-xl mx-auto text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="px-3 py-2 bg-gray-800 rounded w-full"
          type="text"
          placeholder="Search username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="px-3 py-2 bg-gray-800 rounded w-full"
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="px-3 py-2 bg-gray-800 rounded w-full"
          type="number"
          placeholder="Min Public Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-600 w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-300 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {userData && (
        <div className="mt-6 bg-gray-900 p-4 rounded">
          <img src={userData.avatar_url} alt="avatar" width={100} className="rounded-full" />
          <h3 className="text-xl font-semibold">{userData.name || userData.login}</h3>
          <p>{userData.bio}</p>
          <p>Location: {userData.location || "N/A"}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="mt-6 space-y-4">
          {searchResults.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 p-3 rounded flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img src={user.avatar_url} alt={user.login} width={50} className="rounded-full" />
                <div>
                  <p className="font-semibold">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-300 text-sm hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
