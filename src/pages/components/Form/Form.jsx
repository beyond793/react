import { Button } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";

const Form = ({
  handleChangeInput,
  apiCall,
  formData,
  edit,
  deleteApi,
  updateApi,
}) => {
  return (
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
            value={formData.name}
          />
        </div>
        <div className="input-box">
          <span className="details">ارسال به</span>
          <input
            type="text"
            placeholder="مقصد مورد نظر را وارد کنید"
            required
            id="address"
            value={formData.address}
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
            value={formData.email}
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
            value={formData.phonenumber}
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
            value={formData.status}
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
              value={formData.description}
            />
          </span>
        </div>
        {/* <div className="input-box">
  <span className="details">Confirm Password</span>
  <input type="text" placeholder="Confirm your password" required />
</div> */}
      </div>
      {edit ? (
        <>
          <Button
            variant="contained"
            fullWidth
            sx={{ marginBottom: "1rem", fontFamily: "inherit" }}
            onClick={updateApi}
          >
            بروزرسانی
          </Button>
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{ fontFamily: "inherit" }}
            onClick={deleteApi}
          >
            حذف
          </Button>
        </>
      ) : (
        <div className="button">
          <input type="submit" value="ثبت مرسوله" onClick={apiCall} />
        </div>
      )}
    </form>
  );
};

export default Form;
