export default function PopupWithEditForm ({isOpen, closePopup, userName, userAvatar, userAge, userJob, userHobby}) {
  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className= {isOpen ? "popup popup_active" : "popup"}>
      <form className="popup__container popup__form" onSubmit={handleSubmitForm}>
        <h2 className="popup__title">Edit profile</h2>
        <button className="user__button popup__button popup__button_close" onClick={closePopup}/>
        <label className="popup__input-label" htmlFor="user-name">Name</label>
        <input className="popup__input popup__input_user-name" name="user-name" placeholder={userName}></input>
        <label className="popup__input-label" htmlFor="user-avatar">Url avatar</label>
        <input className="popup__input popup__input_user-avatar" name="user-avatar" placeholder={userAvatar}></input>
        <label className="popup__input-label" htmlFor="user-age">Age</label>
        <input className="popup__input popup__input_user-age" name="user-age" placeholder={userAge}></input>
        <label className="popup__input-label" htmlFor="user-job">Job</label>
        <input className="popup__input popup__input_user-job" name="user-job" placeholder={userJob}></input>
        <label className="popup__input-label" htmlFor="user-hobby">Hobby</label>
        <input className="popup__input popup__input_user-hobby" name="user-hobby" placeholder={userHobby}></input>
        <button className="user__button popup__button popup__button_submit" type="submit">SAVE</button>
      </form>
    </div>
  )
}
