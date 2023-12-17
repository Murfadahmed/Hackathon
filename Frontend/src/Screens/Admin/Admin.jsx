// import { Logout } from "../../Redux/ApiCalls";
// import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./admin.css";
import { toast, ToastContainer } from "react-toastify";
import { AddCircleRounded, AssignmentInd, Person } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 220 },
  {
    field: "Profile Pic",
    width: 190,
  },
  { field: "Name", headerName: "Name", width: 150 },
  { field: "Course", headerName: "Course", width: 150 },
  { field: "Password", headerName: "Password", width: 130, type: Number },
];

const rows = [
  {
    id: 1,
    ProfilePic:
      "https://images.pexels.com/photos/19471657/pexels-photo-19471657/free-photo-of-blonde-model-in-leather-pants-and-heels.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    Name: "Jon",
    Course: "Web & App",
    Password: 123456,
  },
  { id: 2, ProfilePic: "", Name: "sunny", Course: "Graphic", Password: 134657 },
  { id: 3, ProfilePic: "", Name: "danny", Course: "Flutter", Password: 1346 },
  {
    id: 4,
    ProfilePic: "",
    Name: "mickeal",
    Course: "Reactjs",
    Password: 12156,
  },
  { id: 5, ProfilePic: "", Name: "smith", Course: "Web & App", Password: 124 },
  { id: 6, ProfilePic: "", Name: "steven", Course: "Designer", Password: 1236 },
  { id: 7, ProfilePic: "", Name: "marsh", Course: "Ai", Password: 1456 },
  {
    id: 8,
    ProfilePic: "",
    Name: "warner",
    Course: "Ui / Ux",
    Password: 121756,
  },
  {
    id: 9,
    ProfilePic: "",
    Name: "starc",
    Course: "Web & App",
    Password: 12345698,
  },
];

function Admin() {
  const [row, setRow] = useState([]);
  const navigate = useNavigate();
  //   const user = useSelector((state) => state.user.user?.data);
  // console.log(user);
  //   const dispatch = useDispatch();

  useEffect(() => {
    const getStudents = async () => {
      // const res = await axios.get("http://localhost:8000/api/adminAdd/")
      // console.log(res.data.data);
      const filterData = rows.map((item) => {
        return {
          //   email: item.email,
          ProfilePic: item.ProfilePic,
          id: item.id,
          Name: item.Name,
          Course: item.Course,
          Password: `item.Password`,
        };
      });
      setRow(filterData);
    };
    getStudents();
  }, []);

  const logoutHandler = (e) => {
    e.preventDefault();
    // Logout(dispatch);
    console.log("hogaya");
    // navigate('/login')
    toast.success("Logout Successful", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="siderbarMenu">
              <h3 className="sidebarTitle">Logo</h3>
              <ul className="sidebarList">
                <li className="sideBarListItem">
                  <Person style={{ color: "#3d7cf3" }} />
                  Students
                </li>
                <li className="sideBarListItem">
                  <AssignmentInd style={{ color: "#3d7cf3" }} />
                  Attendence
                </li>
              </ul>
            </div>
            <button
            onClick={logoutHandler}
                style={{
                  padding: "10px 45px",
                  marginTop:'15px',
                  background: "#5C92F7",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
          </div>
          <div className="logoutContainer" onClick={logoutHandler}>
            <h2 className="logoutText">Logout</h2>
          </div>
        </div>
        <div className="center">
          <div className="centerWrapper">
            <div className="center_top">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Person
                  style={{
                    backgroundColor: "#5C93FA",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "5px",
                    fontSize: "30px",
                  }}
                />
                <span style={{ fontSize: "25px" }}>Students</span>
              </div>
              <Link
                to={"/add-student"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button
                  className="addStudent"
                  onClick={() => navigate("/add-student")}
                >
                  <AddCircleRounded style={{ fontSize: "25px" }} />
                  <span style={{ fontSize: "20px" }}>Add Student</span>
                </button>
              </Link>
            </div>

            <div style={{ height: 400, width: "100%", marginTop: "30px" }}>
              <DataGrid
                rows={row}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
               
              
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Admin;
