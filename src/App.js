import "./App.css";
import TopBox from "./components/TopBox/TopBox";
import BottomBox from "./components/BottomBox/BottomBox";
import { useState } from "react";
import ModalBox from "./components/ModalBox/ModalBox";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [handleModal, setHandleModal] = useState(false);
  const [displayMsg, setDisplayMsg] = useState("");

  const addUserHandler = (username, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: username, age: userAge }];
    });
  };

  return (
    <div className="App">
      <TopBox
        onAddUser={addUserHandler}
        enteredUsername={enteredUsername}
        setEnteredUsername={setEnteredUsername}
        enteredAge={enteredAge}
        setEnteredAge={setEnteredAge}
        setHandleModal={setHandleModal}
        setDisplayMsg={setDisplayMsg}
      />
      <BottomBox users={usersList} />
      <ModalBox
        usersList={usersList}
        handleModal={handleModal}
        setHandleModal={setHandleModal}
        displayMsg={displayMsg}
      />
    </div>
  );
}

export default App;
