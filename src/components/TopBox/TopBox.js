import "./TopBox.scss";

const TopBox = ({
  onAddUser,
  enteredUsername,
  setEnteredUsername,
  enteredAge,
  setEnteredAge,
  setHandleModal,
  setDisplayMsg,
}) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === ""
    ) {
      setHandleModal(true);
      setDisplayMsg({ message: "Please enter a valid name and age" });
      return;
    }
    if (+enteredAge < 1) {
      setHandleModal(true);
      setDisplayMsg({ message: "Please enter a valid age (> 0)" });
      return;
    }
    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandle = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandle = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div className="topbox__container">
      <form className="topbox__form" action="" onSubmit={addUserHandler}>
        <label className="topbox__form-label" htmlFor="username">
          Username
        </label>
        <input
          className="topbox__form-input"
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandle}
        />
        <label className="topbox__form-label" htmlFor="age">
          Age (Years)
        </label>
        <input
          className="topbox__form-input"
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandle}
        />
        <button className="topbox__form-btn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default TopBox;
