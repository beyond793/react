import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Form from "./components/Form/Form";
import ModalWrapper from "./components/Modal";
import DialogAlert from "./DialogAlert";
import "./loginStyles.css";
import { BASE_URL } from "./Main";

const initialState = {
  name: "",
  address: "",
  email: "",
  phonenumber: "",
  description: "",
  status: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  //dialog Controller
  const [openDialog, setOpenDialog] = useState(false);
  const [latestId, setLatestId] = useState(null);
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

  const handleCloseModal = () => {
    setLatestId(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const apiCall = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/create-post",
      formData
    );
    if (response.status === 200) {
      const getLatestApi = await axios.get(
        "http://localhost:8000/api/lastvalue"
      );
      if (getLatestApi.status === 200) {
        const { data } = getLatestApi;
        const { id } = data[0];
        setLatestId(id);
      }
    }
    setFormData(initialState);
  };

  return (
    <>
      <DialogAlert open={openDialog} handleClose={handleCloseDialog} />
      <div className="login-page">
        <div className="container">
          <div className="title">ثبت مرسوله </div>
          <div className="content">
            <Form
              handleChangeInput={handleChangeInput}
              apiCall={apiCall}
              formData={formData}
            />
          </div>
        </div>
        <ModalWrapper open={latestId} onClose={handleCloseModal}>
          <Grid
            container
            alignContent="center"
            justifyContent="center"
            p={2}
            flexDirection="column"
            textAlign="center"
          >
            <Typography fontSize="18px" fontFamily="inherit">
              مرسوله شما با شناسه {latestId} ثبت شد
            </Typography>
            <Typography fontSize="18px" fontFamily="inherit">
              برای رهگیری به صفحه اصلی مراجعه کنید
            </Typography>
          </Grid>
        </ModalWrapper>
      </div>
    </>
  );
};

export default Login;
