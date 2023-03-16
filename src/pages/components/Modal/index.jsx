import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import React from "react";
import { styles } from "./styles";

const ModalWrapper = ({ open, children, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} sx={styles.modalWrapper}>
      <Grid sx={styles.modalContentContainer}>{children}</Grid>
    </Modal>
  );
};

export default ModalWrapper;
