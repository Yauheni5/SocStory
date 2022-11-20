import React from "react";
import { Link } from "react-router-dom";

export default function Users({ usersArray }) {
  const listUsers = usersArray.map((user) => (
    <li key={user.userData.userId} className="friend">
      <h2 className="friend__name">
        {user.userData.firstName} {user.userData.lastName}
      </h2>
      <img src={user.userData.userAvatar.large} alt="avatar" className="friend__avatar"/>
      <p className="friend__location">{user.userData.userLocation.city}, {user.userData.userLocation.country}</p>
      <Link to="/" className="user__button friend__letter">Send message</Link>
    </li>
  ));

  return (
    <ul className="cards-friends user__friends">{listUsers}</ul>
  );
}
