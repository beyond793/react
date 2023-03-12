import React, { useCallback, useEffect, useState } from "react";
import "./loginStyles.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    email: "",
    phoneNumber: "",
    description: "",
    gender: "",
  });
  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };
  const apiCall = async (e) => {
    e.preventDefault();
    console.info("its running");
    const response = await fetch("kosher.com", {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(formData),
    });
    console.info(response);
  };

  return (
    <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                required
                id="name"
                onChange={handleChangeInput}
              />
            </div>
            <div class="input-box">
              <span class="details">Destination</span>
              <input
                type="text"
                placeholder="Enter your Destination"
                required
                id="destination"
                onChange={handleChangeInput}
              />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email"
                required
                id="email"
                onChange={handleChangeInput}
              />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input
                type="text"
                placeholder="Enter your number"
                required
                id="phoneNumber"
                onChange={handleChangeInput}
              />
            </div>
            <div class="input-box">
              <span class="input-box details">
                Description
                <textarea
                  name="Description"
                  cols="97"
                  rows="10"
                  placeholder="Enter your Description"
                  required
                  id="description"
                  onChange={handleChangeInput}
                />
              </span>
            </div>
            {/* <div class="input-box">
              <span class="details">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required />
            </div> */}
          </div>
          <div class="gender-details">
            <input
              type="radio"
              name="gender"
              id="name"
              onChange={handleChangeInput}
            />
            <input type="radio" name="gender" onChange={handleChangeInput} />
            <input type="radio" name="gender" onChange={handleChangeInput} />
            <span class="gender-title">Gender</span>
            {/* <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
              </label>
            </div> */}
          </div>
          <div class="button">
            <input type="submit" value="Register" onClick={apiCall} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
