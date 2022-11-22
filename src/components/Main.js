import React, { useState } from "react";
import Stories from "./Stories";
import Users from "./Users";
import { currentlyTime } from "../utils/constants"

export default function Main({ dataUser, usersArray, onClickEditProfile }) {
  const [statusText, setStatusText] = useState("");
  const [isStatusInput, setIsStatusInput] = useState(false);

  const userAvatarData = {
    src: dataUser['user-avatar'],
    alt: dataUser['user-name'],
  }

  function handleClickEditStatus () {
    console.log(document.querySelector(".user__status-text"));
    const statusInput = document.querySelector(".user__status-text");
    setIsStatusInput(!isStatusInput);

    function setListenerKeyEnter (e) {
      if (e.key==="Enter") {
        setStatusText(statusInput.value);
        statusInput.setAttribute('disabled', 'disabled');
        document.querySelector('.user__button-edit_status').classList.remove('user__button-edit_status-save');
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
        src={dataUser['user-avatar']}
        alt={dataUser['user-name']}
        className="user__avatar"
      />
        <button
          className="user__button user__edit"
          onClick={onClickEditProfile}
        >
          Edit profile
        </button>
      <h1 className="user__name">
        {dataUser['user-name']}
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
        <p className="user__paragraph user__age">Age: {dataUser['user-age']}</p>
        <p className="user__paragraph user__job">Job: {dataUser['user-job']}</p>
        <p className="user__paragraph user__hobby">Hobby: {dataUser['user-hobby']}</p>
      </div>
      <Stories currentlyTime={currentlyTime} userAvatarData={userAvatarData}/>
      <Users usersArray={usersArray} />
    </main>
  );
}
