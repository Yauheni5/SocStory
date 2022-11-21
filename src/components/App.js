import React, { useEffect, useState } from "react";
import "../index.css";
import Main from "./Main";
import Header from "./Header";
import PopupWithEditForm from "./PopupWithEditForm";

function App() {
  const [user, setUser] = useState({ firstName: "Andrey", lastName: "Ivanov" });
  const [usersArray, setUsersArray] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function getNewUsersData() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((res) =>
        res.results.map((item) => {
          console.log(item)
          const firstName = item.name.first;
          const lastName = item.name.last;
          const userEmail = item.email;
          const userAvatar = item.picture;
          const userPhone = item.phone;
          const userId = item.login.uuid;
          const userLocation = item.location;

          const userData = {
            firstName,
            lastName,
            userEmail,
            userAvatar,
            userPhone,
            userId,
            userLocation
          };
          return setUsersArray((usersArray) => [...usersArray, { userData }]);
        })
      );
  }
  function handleClickEditProfile(){
    setIsOpen(true);
    console.log('open')
  }

  function handleClosePopup () {
    setIsOpen(false);
  }

  useEffect(() => {
    getNewUsersData();
  }, []);

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main dataUser={user} usersArray={usersArray} onClickEditProfile={handleClickEditProfile}/>
        <PopupWithEditForm isOpen={isOpen} closePopup={handleClosePopup}/>
      </div>
    </div>
  );
}

export default App;
