import { Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Form from "./components/Form/Form";
import ModalWrapper from "./components/Modal";
import "./mainStyles.css";
export const BASE_URL = "http://localhost:8000/api";
const Main = () => {
  const [formInput, setFormInput] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    address: "",
    description: "",
    email: "",
    id: null,
    name: "",
    phonenumber: "",
    status: "",
  });
  const handleChangeInput = (e) => {
    const { value } = e.target;
    setError(null);
    setFormInput(value);
  };
  const apiCall = async (e) => {
    e.preventDefault();
    if (!formInput) console.log("pls enter someth");
    else {
      const response = await axios.get(`${BASE_URL}/search/${formInput}`);
      if (response.status === 200) {
        const { data } = response;
        if (data.length > 0) {
          setShowModal(true);
          setFormData(data[0]);
        } else {
          setError("داده ای با شناسه وارد شده وجود ندارد");
        }
      }
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleChangeFormInput = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };
  const updateApi = async () => {
    await axios.put(`${BASE_URL}/update/${formData.id}`, formData);
    closeModal();
  };
  const deleteApi = async () => {
    await axios.delete(`${BASE_URL}/delete/${formData.id}`);
    closeModal();
  };

  return (
    <div className="body">
      <ModalWrapper open={showModal} onClose={closeModal}>
        <div className="container">
          <div className="content">
            <Form
              formData={formData}
              handleChangeInput={handleChangeFormInput}
              updateApi={updateApi}
              deleteApi={deleteApi}
              edit
            />
          </div>
        </div>
      </ModalWrapper>
      <header className="header">
        <span className="header-icon-handler">
          <span className="login-button">
            <a className="a-tag" href="./login">
              ثبت مرسوله
            </a>
          </span>
          <i className="fa-thin fa-user"></i>
        </span>
      </header>
      <form action="" className="form">
        <div className="logo">
          <img
            src="https://tracking.post.ir/Content/Image/postarm.png"
            alt="post logo"
          />
        </div>
        <span className="text">
          <strong>سامانه پیگیری مرسولات شرکتی پست ایلام</strong>
        </span>
        <div className="input">
          <span className="text-input">
            <strong>لطفا کد پیگیری خود را در این محل وراد کنید</strong>
          </span>
          <input
            type="text"
            className="input-controller"
            onChange={handleChangeInput}
          />
          <div className="button-possition">
            <button className="button-main" onClick={apiCall}>
              <span className="search-icon-holder"></span>
              search
            </button>
          </div>
        </div>
      </form>

      {error && (
        <Typography
          color="red"
          textAlign="center"
          width="100%"
          fontSize="18px"
          fontFamily="inherit"
          m={1}
        >
          {error}
        </Typography>
      )}
      <article className="middle">
        <h4>شرکت ملی پست جمهوری اسلامی ایران</h4>
        <h5>معاونت توسعه فناوری اطلاعات، امنیت شبکه و هوشمندسازی</h5>
        <h6>
          اطلاعات مربوط به جابجایی مرسولات پستی بصورت لحظه ای در این سامانه ثبت
          می گردد
        </h6>
        <h6>
          اطلاعات مربوط به مرسولات پستی حداکثر 6 ماه در این سامانه نگهداری و
          قابل رهگیری می باشد
        </h6>
        <h6>
          در صورت هرگونه ابهام ، سوال و نیاز به اطلاعات بیشتر با شماره تلفن 193
          واحد ارتباط با مشتریان و در صورت ضرورت به ثبت شکایت به
          <a href="https://eop.post.ir/"> سامانه ثبت و پیگیری شکایات </a>
          ملی پست مراجعه فرمائید
        </h6>
      </article>
      <footer className="footer">
        <div className="item-control">
          <li className="list-item">
            <ul>
              <a className="a-tag" href="https://www.post.ir/">
                پرتال شرکت ملی پست
              </a>
            </ul>
            <ul>
              <a className="a-tag" href="https://ecard.post.ir/">
                سفارش آنلاین کارت پستال
              </a>
            </ul>
            <ul>
              <a className="a-tag" href="https://mail.post.ir/">
                {" "}
                سرویس پست الکترونیک
              </a>
            </ul>
            <ul>
              <a className="a-tag" href="http://www.ebazaar-post.ir/">
                {" "}
                بازار الکترونیک
              </a>
            </ul>
          </li>
          <span className="footer-text">
            توسعه داده شده توسط تیم طراحی و توسعه کبیرکوه
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Main;
