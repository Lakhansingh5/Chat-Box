import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchFrom">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/18250682/pexels-photo-18250682/free-photo-of-studio-portrait-of-a-young-brunette-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="userChatinfo">
          <span>Lakhan</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
