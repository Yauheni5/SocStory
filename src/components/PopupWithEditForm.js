export default function PopupWithEditForm({
  isOpen,
  closePopup,
  handleChangeInput,
  onSubmitEditProfile,
  userInfo,
}) {
  function handleSubmitForm(e) {
    e.preventDefault();
    onSubmitEditProfile();
  }

  return (
    <div className={isOpen ? "popup popup_active" : "popup"}>
      <form
        className="popup__container popup__form"
        onSubmit={handleSubmitForm}>
        <h2 className="popup__title">Edit profile</h2>
        <button
          className="user__button popup__button popup__button_close"
          onClick={closePopup}
        />
        <label className="popup__input-label" htmlFor="user-name">
          Name
        </label>
        <input
          className="popup__input popup__input_user-name"
          name="user-name"
          placeholder="input name"
          onChange={handleChangeInput}
          value={userInfo["user-name"] || ""}
        />
        <label className="popup__input-label" htmlFor="user-avatar">
          Url avatar
        </label>
        <input
          className="popup__input popup__input_user-avatar"
          type="url"
          name="user-avatar"
          placeholder="input src avatar"
          onChange={handleChangeInput}
          value={userInfo["user-avatar"] || ""}
        />
        <label className="popup__input-label" htmlFor="user-age">
          Age
        </label>
        <input
          className="popup__input popup__input_user-age"
          type="text"
          name="user-age"
          placeholder="input age"
          maxLength="3"
          onChange={handleChangeInput}
          value={userInfo["user-age"] || ""}
        />
        <label className="popup__input-label" htmlFor="user-job">
          Job
        </label>
        <input
          className="popup__input popup__input_user-job"
          name="user-job"
          placeholder="input job"
          onChange={handleChangeInput}
          value={userInfo["user-job"] || ""}
        />
        <label className="popup__input-label" htmlFor="user-hobby">
          Hobby
        </label>
        <input
          className="popup__input popup__input_user-hobby"
          name="user-hobby"
          placeholder="input hobby"
          onChange={handleChangeInput}
          value={userInfo["user-hobby"] || ""}
        />
        <button
          className="user__button popup__button popup__button_submit"
          type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
}
