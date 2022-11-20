import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Stories from "./Stories";
import Users from "./Users";
import { currentlyTime } from "../utils/constants"

export default function Main({ dataUser, usersArray }) {
  const [statusText, setStatusText] = useState("");
  const [isStatusInput, setIsStatusInput] = useState(false);

  const userAvatarData = {
    src: "https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg",
    alt: "user avatar",
  }

  function handleClickEditStatus () {
    console.log(document.querySelector(".user__status-text"));
    const statusInput = document.querySelector(".user__status-text");
    setIsStatusInput(!isStatusInput);

    function setListenerKeyEnter (e) {
      if (e.key==="Enter") {
        setStatusText(statusInput.value);
        statusInput.setAttribute('disabled', 'disabled');
        document.removeEventListener('keyup', setListenerKeyEnter);
        setIsStatusInput(false);
      }
    }

    if (isStatusInput){
      setStatusText(statusInput.value);
      statusInput.setAttribute('disabled', 'disabled');
      document.querySelector('.user__button-edit_status').classList.remove('user__button-edit_status-save');
    } else {
      statusInput.removeAttribute('disabled', 'disabled');
      document.addEventListener('keyup', setListenerKeyEnter);
      document.querySelector('.user__button-edit_status').classList.add('user__button-edit_status-save');
    }
  }

  return (
    <main className="user">
      <img
        src={userAvatarData.src}
        alt={userAvatarData.alt}
        className="user__avatar"
      />
      <Route>
        <Link to="edit-profile" className="user__button user__edit">
          Edit profile
        </Link>
      </Route>
      <h1 className="user__name">
        {dataUser.firstName} {dataUser.lastName}
      </h1>
      <div className="user__status">
        <textarea
          type="text"
          className="user__paragraph user__status-text"
          placeholder={statusText || "status text"}
          disabled
        />
        <button className="user__button user__button-edit user__button-edit_status" onClick={handleClickEditStatus} />
      </div>
      <div className="user__about">
        <p className="user__paragraph user__age">Age:</p>
        <p className="user__paragraph user__job">Job:</p>
        <p className="user__paragraph user__hobby">About:</p>
      </div>
      <Stories currentlyTime={currentlyTime} userAvatarData={userAvatarData}/>
      <Users usersArray={usersArray} />
    </main>
  );
}
