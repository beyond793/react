import React, { useCallback, useEffect, useState } from "react";
import "./loginStyles.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    email: "",
    phoneNumber: "",
    description: "",
    status: "",
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
  };

  return (
    <div className="login-page">
      <div class="container">
        <div class="title">ثبت مرسوله </div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">نام و نام خانوادگی</span>
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                  required
                  id="name"
                  onChange={handleChangeInput}
                />
              </div>
              <div class="input-box">
                <span class="details">ارسال به</span>
                <input
                  type="text"
                  placeholder="مقصد مورد نظر را وارد کنید"
                  required
                  id="destination"
                  onChange={handleChangeInput}
                />
              </div>
              <div class="input-box">
                <span class="details">ادرس ایمیل</span>
                <input
                  type="text"
                  placeholder="آدرس ایمیل را وارد کنید"
                  required
                  id="email"
                  onChange={handleChangeInput}
                />
              </div>
              <div class="input-box">
                <span class="details">شماره تماس</span>
                <input
                  type="text"
                  placeholder="شماره تماس را وارد کنید"
                  required
                  id="phoneNumber"
                  onChange={handleChangeInput}
                />
              </div>
              <div class="input-box">
                <span class="details">وضعیت</span>
                <input
                  type="text"
                  placeholder="وضعیت مرسوله را مشخص کنید"
                  required
                  id="status"
                  onChange={handleChangeInput}
                />
              </div>
              <div class="input-box">
                <span class="input-box details">
                  توضیحات
                  <textarea
                    name="Description"
                    cols="32.5"
                    rows="2"
                    placeholder="توضیحات خود را وارد کنید"
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
            <div class="button">
              <input type="submit" value="ثبت مرسوله" onClick={apiCall} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
