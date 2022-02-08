import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { getUsers } from "../../services/userService";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                users.img ||
                "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
