import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Login from "./Screens/Login";
import { SideBar } from "./Components/SideBar";

function App() {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/user")
  //     .then((res) => setUser(res.data))
  //     .catch((err) => console.log(err, "in axios"));
  //   console.log(user);
  // }, []);
  return (
    <>
      <div>
        {/* <Login/> */}
        {/* <SideBar/> */}
      </div>
    </>
  );
}

export default App;
