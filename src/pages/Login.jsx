import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import DialogAlert from "./DialogAlert";
import "./loginStyles.css";
import { BASE_URL } from "./Main";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phonenumber: "",
    description: "",
    status: "",
  });
  //dialog Controller
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const apiCall = async (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:8000/api/create-post", formData);
    // const response = await fetch(`${BASE_URL}/create-post`, {
    //   method: "POST",
    //   // mode: "cors", // no-cors, *cors, same-origin
    //   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   // credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json; charset=UTF-8",
    //   },
    //   // redirect: "follow", // manual, *follow, error
    //   // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(formData),
    // });
    // handleClickOpenDialog();
  };

  return (
    <>
      <DialogAlert open={openDialog} handleClose={handleCloseDialog} />
      <div className="login-page">
        <div className="container">
          <div className="title">ثبت مرسوله </div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">نام و نام خانوادگی</span>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    required
                    id="name"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="input-box">
                  <span className="details">ارسال به</span>
                  <input
                    type="text"
                    placeholder="مقصد مورد نظر را وارد کنید"
                    required
                    id="address"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="input-box">
                  <span className="details">ادرس ایمیل</span>
                  <input
                    type="text"
                    placeholder="آدرس ایمیل را وارد کنید"
                    required
                    id="email"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="input-box">
                  <span className="details">شماره تماس</span>
                  <input
                    type="text"
                    placeholder="شماره تماس را وارد کنید"
                    required
                    id="phonenumber"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="input-box">
                  <span className="details">وضعیت</span>
                  <input
                    type="text"
                    placeholder="وضعیت مرسوله را مشخص کنید"
                    required
                    id="status"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="input-box">
                  <span className="input-box details">
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
                {/* <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required />
            </div> */}
              </div>
              <div className="button">
                <input type="submit" value="ثبت مرسوله" onClick={apiCall} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
