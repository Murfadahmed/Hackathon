import React, { useState } from "react";
import "./Addstudent.css";
// import { ArrowLeft } from "@mui/icons-material";
import { TextField, Container, Button } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const Addstudent = () => {
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [course, setCourse] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setphoneNumber] = useState("");
    const [studentId, setStudentId] = useState("");
    const navigate = useNavigate()
    
    const addHanlder =  () => {
    navigate('/admin-panel')
    // try {
    //   const obj = {
    //     firstname,
    //     lastname,
    //     course,
    //     password,
    //     email,
    //     phonenumber,
    //     studentId,
    //   };

    //   const res = await axios.post(
    //     "http://localhost:8000/api/adminAdd/addstudents/",
    //     obj
    //   );

    //   console.log(res.data.data);
    //   window.location.reload();
    // } catch (error) {
    //   console.error("Error adding student:", error);
    // }
  };

  return (
    <Container className="add-student-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 40 }}
        >
          <ArrowLeft />
          Add Student
        </div>
        <button className="Addbtn" onClick={addHanlder}>
          Add
        </button>
      </div>
      <div className="input">
        <input
          type="file"
          className="input_field"
          accept="image/*"
          name="image"
          id="image"
        />
        {/* <CameraAlt className="camera" /> */}
      </div>
      <form className="inputItem">
        <TextField
          label="FirstName"
          name="FirstName"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
          label="LastName"
          name="LastName"
          variant="outlined"
          fullWidth
          margin="normal"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <TextField
          label="Course"
          name="Course"
          variant="outlined"
          fullWidth
          margin="normal"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <TextField
          label="Password"
          name="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Email"
          name="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="PhoneNumber"
          name="PhoneNumber"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phonenumber}
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <TextField
          label="StudentId"
          name="StudentId"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        {/* <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Add Student
        </Button> */}
      </form>
    </Container>
  );
};

export default Addstudent;