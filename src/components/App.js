import React, { useEffect, useState } from "react";
import "../index.css";
import Main from "./Main";
import Users from "./Users";
import Header from "./Header";

function App() {
  const [user, setUser] = useState({ firstName: "Andrey", lastName: "Ivanov" });
  const [usersArray, setUsersArray] = useState([]);

  function getNewUsersData() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((res) =>
        res.results.map((item) => {
          const firstName = item.name.first;
          const lastName = item.name.last;
          const userEmail = item.email;
          const userAvatar = item.picture;
          const userPhone = item.phone;
          const userId = item.login.uuid;
          const userData = {
            firstName,
            lastName,
            userEmail,
            userAvatar,
            userPhone,
            userId,
          };
          return setUsersArray((usersArray) => [...usersArray, { userData }]);
        })
      );
  }

  useEffect(() => {
    getNewUsersData();
  }, []);

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main dataUser={user} />
        <Users usersArray={usersArray} />
      </div>
    </div>
  );
}

export default App;
