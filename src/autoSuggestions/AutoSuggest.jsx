import React, { useEffect, useState } from "react";

const AutoSuggest = () => {
  const [user, setUsers] = useState([]);

  const [names, setNames] = useState("");

  const [filter, setFilter] = useState([]);

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  //   const fil = user.filter((n) =>
  //     n.firstName.toLowerCase().includes(names.toLowerCase())
  //   );

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setNames(query);
    if (query.length > 1) {
      const filtered = user.filter((item) =>
        item.firstName.toLowerCase().includes(query)
      );
      setFilter(filtered);
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }

  function handleClick(event) {
    setNames(event.target.innerText);
    setDisplay(false);
  }

  return (
    <div className="text-center bg-purple-300 p-5">
      <h1> AutoSuggest</h1>
      <input
        type="text"
        placeholder="search here"
        name="searchUsers"
        value={names}
        onChange={handleChange}
      />

      <br />
      {display &&
        filter.map((f) => {
          return (
            <span className="cursor-pointer" key={f.id} onClick={handleClick}>
              {f.firstName}
              <br />
            </span>
          );
        })}
      {/* {fil.map((f) => {
        return (
          <span key={f.id}>
            {f.firstName} <br />
          </span>
        );
      })} */}
    </div>
  );
};

export default AutoSuggest;
