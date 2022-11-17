import React from "react";

export default function Users({ usersArray }) {
  console.log(usersArray);
  const listUsers = usersArray.map((user) => (
    <li key={user.userData.userId}>
      <h2>
        {user.userData.firstName} {user.userData.lastName}
      </h2>
      <img src={user.userData.userAvatar.large} alt="avatar" />
      <p>{user.userData.userPhone}</p>
    </li>
  ));

  return (
    <div>
      <ul>{listUsers}</ul>
    </div>
  );
}
