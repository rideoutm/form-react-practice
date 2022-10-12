import "./BottomBox.scss";
import uuid from "react-uuid";

const BottomBox = ({ users }) => {
  return (
    <div className="bottom-box">
      <ul className="bottom-box__list">
        {users.map((user) => (
          <li key={uuid()} className="bottom-box__list-item">
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBox;
