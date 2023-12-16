import { Box, Typography, styled } from "@mui/material";

export const BoxGradient = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(to right, rgb(116, 116, 191), rgb(52, 138, 199)) 0% 0% / 100% repeat-x",
}) as typeof Box;

export const Title = styled(Typography)({
  fontSize: "30px",
  fontWeight: "600",
  color: "#fff",
  padding: "50px 15px",
}) as typeof Typography;
