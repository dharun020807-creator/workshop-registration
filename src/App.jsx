import React, { useState } from "react";

function WorkshopRegistration() {
  const [participants, setParticipants] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
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
      name: "",
      email: "",
      phone: "",
      department: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4facfe, #fe0077)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "poppins",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0 8px 20px rgba(127, 243, 247, 0.92)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#a813ec" }}>
          Workshop Registration
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
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

          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          {message}
        </p>

        <h3 style={{ color: "#a813ec" }}>Participant List</h3>

        <ul>
          {participants.map((participant, index) => (
            <li key={index}>
              {participant.name} - {participant.email} -{" "}
              {participant.department}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#0077b6",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

export default WorkshopRegistration;