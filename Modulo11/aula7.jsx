import React, {useState} from 'react';

function StudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [homeroomClassNumber, setHomeroomClassNumber] = useState("");
  const [studentID, setStudentID] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handleHomeroomClassNumber(e) {
    setHomeroomClassNumber(e.target.value);
  }
  function handleStudentID(e) {
    setStudentID(e.target.value);
  }

  const style = {
    width: "99%",
  }
  return (
    <>
      <form>
        <label for="firstName">First name:</label>
        <input id="firstName" style={style} type="text" onChange={handleFirstName} value={firstName}/>
        <label for="lasttName">Last name:</label>
        <input id="lastName" style={style} type="text" onChange={handleLastName} value={lastName}/>
        <label for="age">Age:</label>
        <input id="age" style={style} type="text" onChange={handleAge} value={age}/>
        <label for="address">Address:</label>
        <input id="address" style={style} type="text" onChange={handleAddress} value={address}/>
        <label for="homeroomClassNumber">Homeroom class number:</label>
        <input id="homeroomClassNumber" style={style} type="text" onChange={handleHomeroomClassNumber} value={homeroomClassNumber}/>
        <label for="studentID">Student ID:</label>
        <input id="studentID" style={style} type="text" onChange={handleStudentID} value={studentID}/>
      </form>
      <h4>First Name: {firstName}</h4>
      <h4>Last Name: {lastName}</h4>
      <h4>Age: {age}</h4>
      <h4>Address: {address}</h4>
      <h4>Homeroom class number: {homeroomClassNumber}</h4>
      <h4>Student ID: {studentID}</h4>
    </>
  );
}

export default StudentForm;