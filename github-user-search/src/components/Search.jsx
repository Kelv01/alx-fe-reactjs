
import  { useState } from "react";
import { GetUserDetails } from "../services/githubService";

function Search ()  {
  const [username, setUsername]= useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) 
      return(
        setLoading(true),
        setError(''),
        setUserData(null)
    )
    try {
      const data = await GetUserDetails(username)
      setUserData(data)
    } catch (error) {
      setError('Looks like we cant find the user', error)
    }finally{
      setLoading(false)
    
    }
  }

  return (
    <div className="container px-2 py-4 ">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button type="submit" className="bg-blue-700  text-amber-50 rounded-full">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      {userData && (
        <div className="user-infor ">
            <img src={userData.avatar_url} alt="avatar"  width={150}/>
            <h3>{userData.name || userData.login}</h3>
            <p>{userData.bio}</p>
            <p>Public Repos: {userData.public_repos}</p>
            <a href={userData.html_url} target="_blank" rel="noreferrer">view profile</a>
        </div>
      )}
    </div>
  );
};
export default Search



  

