import React, { useState } from "react";
import "./mainStyles.css";
export const BASE_URL = "http://localhost:8000/api";
const Main = () => {
  const [formInput, setFormInput] = useState(null);
  // const [hasError, setHasError] = useState(false);
  const handleChangeInput = (e) => {
    const { value } = e.target;
    setFormInput(value);
  };
  const apiCall = async (e) => {
    e.preventDefault();
    if (!formInput) console.log("pls enter someth");
    else {
      const response = await fetch(`${BASE_URL}/search/${formInput}`, {
        method: "GET",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
    }
  };

  return (
    <div className="body">
      <header className="header">
        <span className="header-icon-handler">
          <button className="login-button">
            <a href="./login">Login page</a>
          </button>
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
          <a href="https://eop.post.ir/">سامانه ثبت و پیگیری شکایات </a>
          ملی پست مراجعه فرمائید
        </h6>
      </article>
      <footer className="footer">
        <div className="item-control">
          <li className="list-item">
            <ul>
              <a href="https://www.post.ir/">پرتال شرکت ملی پست</a>
            </ul>
            <ul>
              <a href="https://ecard.post.ir/">سفارش آنلاین کارت پستال</a>
            </ul>
            <ul>
              <a href="https://mail.post.ir/"> سرویس پست الکترونیک</a>
            </ul>
            <ul>
              <a href="http://www.ebazaar-post.ir/"> بازار الکترونیک</a>
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
