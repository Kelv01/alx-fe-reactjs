import { useState } from "react";
import { fetchUserData, fetchAdvancedUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);
    setResults([]);

    try {
      if (location || minRepos) {
        const data = await fetchAdvancedUserData(username, location, minRepos);
        setResults(data);
      } else {
        const data = await fetchUserData(username);
        setUserData(data);
      }
    } catch (error) {
      setError('Looks like we can’t find the user', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-4 py-6 max-w-xl mx-auto gap-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            className="px-3 py-2 bg-gray-800 text-white rounded w-full"
            type="text"
            placeholder="Search username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="px-2 py-2 bg-gray-600 text-white rounded-2xl w-full"
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          /> 
          <input
            className="px-2 py-2 bg-gray-600 text-white rounded-2xl w-full"
            type="number"
            placeholder="Min Repos (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white rounded-2xl px-4 py-2 hover:bg-blue-600 w-full"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="user-info mt-4">
          <img src={userData.avatar_url} alt="avatar" width={150} />
          <h3>{userData.name || userData.login}</h3>
          <p>{userData.bio}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((user) => (
            <div key={user.id} className="p-4 bg-gray-800 text-white rounded-2xl">
              <img src={user.avatar_url} alt={user.login} width={100} />
              <h3>{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
