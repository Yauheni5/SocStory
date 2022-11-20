import React from "react"
import Story from "./Story"

export default function Stories({currentlyTime, userAvatarData}) {


  return (
    <div className="user__stories">
      <button className="user__button user__add-story">Add Story</button>
      <Story currentlyTime={currentlyTime} userAvatarData={userAvatarData}/>
    </div>

  )
}
