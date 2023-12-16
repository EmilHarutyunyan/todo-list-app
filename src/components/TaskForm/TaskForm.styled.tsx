import { styled } from "@mui/material";

export const FormTask = styled("form")({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  flexWrap: "wrap",
  margin: "30px 0",
  "@media (max-width: 425px)": ({

    "& > div": {
      width:"100%"
    },
    "& > button": {
      width:"100%"
    },
  }),
});
