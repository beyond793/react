import React from "react";
import "./mainStyles.css";

const Main = () => {
  return (
    <div>
      <header class="header">
        <span class="header-icon-handler">
          <button class="login-button">
            <a href="./login.html">cl</a>
          </button>
          <i class="fa-thin fa-user"></i>
        </span>
      </header>
      <form action="" class="form">
        <div class="logo">
          <img
            src="https://tracking.post.ir/Content/Image/postarm.png"
            alt="post logo"
          />
        </div>
        <span class="text">
          <strong>سامانه پیگیری مرسولات شرکتی پست ایلام</strong>
        </span>
        <div class="input">
          <span class="text-input">
            <strong>لطفا کد پیگیری خود را در این محل وراد کنید</strong>
          </span>
          <input type="text" class="input-controller" />
          <div class="button-possition">
            <button class="button">
              <span class="search-icon-holder">
                <i class="fa-sharp fa-regular fa-magnifying-glass"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
      <article class="middle">
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
      <footer class="footer">
        <div class="item-control">
          <li class="list-item">
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
          <span class="footer-text">
            توسعه داده شده توسط تیم طراحی و توسعه کبیرکوه
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Main;
