import { useState } from "react"

export default function Story({currentlyTime, userAvatarData}) {
  const [counterLike, setConterLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);


  function handleClickLike(e){
    if (isLiked) {
      e.target.classList.remove("story__button-like_active");
      setConterLike(counterLike-1);
    } else {
      e.target.classList.add("story__button-like_active");
      setConterLike(counterLike+1);
    }
    setIsLiked(!isLiked);
  }

  return (
    <article className="story user__story">
      <button className="user__button story__button-delete"/>
      <button className="user__button user__button-edit user__button-edit_story story__button-edit" />
      <p className="story__date">{currentlyTime}</p>
      <img src={userAvatarData.src} alt={userAvatarData.alt} className="story__avatar"/>
      <p className="story__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pulvinar magna. Nunc et enim non ante sodales consequat. Nunc sollicitudin, massa eget mollis vulputate, justo turpis consequat mauris, et finibus magna diam sit amet nunc. Ut molestie nisl ut augue iaculis, sit amet feugiat neque malesuada. Sed sodales suscipit purus, hendrerit malesuada quam euismod a. Cras sed diam justo. Fusce eget efficitur nisi. Maecenas tincidunt ex eget mauris suscipit pulvinar.</p>
      <button
        className="user__button story__button-like"
        onClick={handleClickLike}
      />
      <p className="story__counter-like">{counterLike}</p>
      <button className="user__button story__button-reply"/>
      <input type="text" placeholder="comment" className="user__input story__input" />
    </article>
  )
}
