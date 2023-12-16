import { Dialog, DialogTitle, DialogProps } from "@mui/material";
import React, { ReactNode } from "react";

type DialogModalProps = {
  title: string;
  open: boolean;
  children: ReactNode;
};

const DialogModal: React.FC<DialogProps & DialogModalProps> = (props) => {
  const { title, open, children } = props;

  return (
    <Dialog {...props} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default DialogModal;
