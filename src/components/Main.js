import React from "react";
import { Link, Route } from "react-router-dom";
import Users from "./Users";

export default function Main({ dataUser, usersArray }) {
  return (
    <main className="user">
      <img
        src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg"
        alt="user avatar"
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
        <p className="user__paragraph user__status-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          pulvinar magna. Nunc et enim non ante sodales consequat. Nunc
          sollicitudin, massa eget mollis vulputate, justo turpis consequat
          mauris, et finibus magna diam sit amet nunc. Ut molestie nisl ut augue
          iaculis, sit amet feugiat neque malesuada. Sed sodales suscipit purus,
          hendrerit malesuada quam euismod a. Cras sed diam justo. Fusce eget
          efficitur nisi. Maecenas tincidunt ex eget mauris suscipit pulvinar.
        </p>
        <button className="user__button user__button_edit-status" />
      </div>
      <div className="user__about">
        <p className="user__paragraph user__age">Age:</p>
        <p className="user__paragraph user__job">Job:</p>
        <p className="user__paragraph user__hobby">About:</p>
      </div>
      <div className="user__stories">
        <button className="user__button user__add-story">Add Story</button>
        <article>
          <h2>Title story</h2>
          <p className="">Text story</p>
          <button className="user__button">Like</button>
          <input type="text" placeholder="comment" className="user__input" />
        </article>
      </div>
      <Users usersArray={usersArray} />
    </main>
  );
}
