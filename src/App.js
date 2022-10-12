import "./App.css";
import TopBox from "./components/TopBox/TopBox";
import BottomBox from "./components/BottomBox/BottomBox";
import { useState } from "react";
import ModalBox from "./components/ModalBox/ModalBox";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: username, age: userAge }];
    });
  };

  return (
    <div className="App">
      <TopBox onAddUser={addUserHandler} />
      <BottomBox users={usersList} />
      <ModalBox usersList={usersList} />
    </div>
  );
}

export default App;
