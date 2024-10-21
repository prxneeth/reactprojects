import React, { useEffect, useState } from "react";

const GitProfileFetch = () => {
  const [userd, setUserd] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserd(data));
  }, [username]);

  function handleClick() {
    setUsername(userd);
  }

  return (
    <div>
      <h2>gitgit</h2>
      <input type="text" onChange={(e) => setUserd(e.target.value)} />
      <button onClick={handleClick}>search</button>

      <div>
        <h3>Username: {username.login}</h3>
        <img src={username.avatar_url} alt={username.login} width="100" />
        <p>Followers: {username.followers}</p>
        <p>Following: {username.following}</p>
      </div>
    </div>
  );
};

export default GitProfileFetch;
