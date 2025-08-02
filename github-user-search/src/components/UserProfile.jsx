import React, { useEffect, useState } from "react";
import { GetUserDetails } from "../services/Services";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await GetUserDetails();
        setUser(userData);
      } catch (error) {
        console.error("Could not fetch user:", error);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username{user.login}</p>
      <img src={user.avator_url} alt={user.login} width={100} />
    </div>
  );
}

export default UserProfile;
