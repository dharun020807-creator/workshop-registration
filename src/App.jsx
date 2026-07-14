import React, { useState } from "react";

function WorkshopRegistration() {
const [participants, setParticipants] = useState([]);

 const [formData, setFormData] = useState({
  firstName: "",
  secondName: "",
  dob: "",
  email: "",
  phone: "",
  department: "",
  address: "",
});

const [message, setMessage] = useState("");

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();

const exists = participants.some(
  (participant) => participant.email === formData.email
);

if (exists) {
  setMessage("⚠ Participant already registered!");
  return;
}

setParticipants([...participants, formData]);
setMessage("✅ Registration Successful! Confirmation sent.");

 setFormData({
  firstName: "",
  secondName: "",
  dob: "",
  email: "",
  phone: "",
  department: "",
  address: "",
});

};

return (
<div
 style={{
  minHeight: "100vh",
  background:
    "linear-gradient(135deg, #6A11CB 0%, #2575FC 35%, #00DBDE 70%, #FC00FF 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Poppins', sans-serif",
}}
>
<div
 style={{
  width: "460px",
  background: "#ffffff",
  borderRadius: "25px",
  padding: "35px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
}}
>
 <h2
  style={{
    textAlign: "center",
    color: "#5B21B6",
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "25px",
  }}
>
  🚀 Workshop Registration
</h2>

    <form onSubmit={handleSubmit}>
      <input
  type="text"
  name="firstName"
  placeholder="Enter First Name"
  value={formData.firstName}
  onChange={handleChange}
  required
  style={inputStyle}
/>

<input
  type="text"
  name="secondName"
  placeholder="Enter Second Name"
  value={formData.secondName}
  onChange={handleChange}
  required
  style={inputStyle}
/>

<input
  type="date"
  name="dob"
  value={formData.dob}
  onChange={handleChange}
  required
  style={inputStyle}
/>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Enter Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
        style={inputStyle}
      >
        <option value="">Select Department</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Chemistry">Chemistry</option>
        <option value="History">History</option>
        <option value="Economics">Economics</option>
        <option value="Commerce">Commerce</option>
        <option value="BBA">BBA</option>
      </select>

      <textarea
        name="address"
        placeholder="Enter Address"
        value={formData.address}
        onChange={handleChange}
        required
        style={{
          ...inputStyle,
          height: "80px",
        }}
      />

      <button type="submit" style={buttonStyle}>
        Register
      </button>
    </form>

    <p style={{ textAlign: "center", fontWeight: "bold" }}>
      {message}
    </p>

    <details style={{ marginTop: "20px" }}>
      <summary
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          color: "#0077b6",
        }}
      >
        ⋮ Participant List
      </summary>

      <ul>
        {participants.map((participant, index) => (
          <li key={index}>
             <strong>
  {participant.firstName} {participant.secondName}
</strong>
<br />
DOB: {participant.dob}
            <br />
            Email: {participant.email}
            <br />
            Phone: {participant.phone}
            <br />
            Department: {participant.department}
            <br />
            Address: {participant.address}
            <hr />
          </li>
        ))}
      </ul>
    </details>
  </div>
</div>

);
}

 const inputStyle = {
  width: "100%",
  padding: "14px",
  margin: "10px 0",
  borderRadius: "15px",
  border: "2px solid #E6E6E6",
  outline: "none",
  fontSize: "16px",
  transition: "0.3s",
  background: "#F8F9FF",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "15px",
  border: "none",
  borderRadius: "30px",
  background: "linear-gradient(90deg,#FF512F,#DD2476,#7F00FF)",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  letterSpacing: "1px",
  boxShadow: "0 10px 25px rgba(127,0,255,0.4)",
};

export default WorkshopRegistration;
