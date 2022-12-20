import { useEffect, useState } from "react"

export default function Story({currentlyTime, userAvatarData}) {
  const [counterLike, setConterLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [textStory, setTextStory] = useState("Text story");

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

  function editStory(buttonEditNode, articleEditable) {
    buttonEditNode.classList.remove("story__button-edit_active");
    let textAreaActive = articleEditable.querySelector('.story__text_edit')
    let textEditable = document.createElement('p');
    textEditable.classList.add('story__text');
    textEditable.textContent = textAreaActive.value;
    setTextStory(textAreaActive.value);
    textAreaActive.replaceWith(textEditable);
  }

  function saveEditableStory(buttonEditNode, articleEditable) {
    let textEditable = articleEditable.querySelector('.story__text')
    buttonEditNode.classList.add("story__button-edit_active");
    let textAreaActive = document.createElement("textarea");
    textAreaActive.classList.add('story__text');
    textAreaActive.classList.add('story__text_edit');
    textAreaActive.textContent = textEditable.textContent;
    textEditable.replaceWith(textAreaActive);
  }

  function handleClickEditStory(e) {
    const buttonEditNode = e.target;
    const articleEditable = buttonEditNode.parentNode;
    console.log(buttonEditNode, articleEditable)
    if (buttonEditNode.classList.contains('story__button-edit_active')) {
      editStory(buttonEditNode, articleEditable);
    } else {
      saveEditableStory(buttonEditNode, articleEditable);
    }
  }

  return (
    <article className="story user__story">
      <button className="user__button story__button-delete"/>
      <button
        className="user__button user__button-edit user__button-edit_story story__button-edit"
        onClick={handleClickEditStory}
        />
      <p className="story__date">{currentlyTime}</p>
      <img
        src={userAvatarData.src}
        alt={userAvatarData.alt}
        className="story__avatar"
      />
      <p
        className="story__text"
      >
        {textStory}
      </p>
      <button
        className="user__button story__button-like"
        onClick={handleClickLike}
      />
      <p className="story__counter-like">{counterLike}</p>
      <button className="user__button story__button-reply"/>
      <input type="text" placeholder="comment" className="user__input story__input story__input_active" />
    </article>
  )
}
