import { Box, ListItem, ListItemText, Typography, styled } from "@mui/material";

export const BoxList = styled(Box)({
  border: "2px solid #1976d2",
  borderRadius: "8px",
  marginBottom: "10px",
}) as typeof Box;

export const ListBoxItem = styled(ListItem)({
  "@media only screen and (max-width:425px)": {
    flexWrap: "wrap",
  },
}) as typeof Box;

export const BoxAction = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}) as typeof Box;

export const TypographyEmpty = styled(Typography)({
  fontSize: "20px",
  fontWeight: "600",
  color: "#1976d2",
  padding: "50px 15px",
  textAlign: "center",
}) as typeof Typography;

export const ListItemStatus = styled(ListItemText)({
  color: "#fff",
  fontSize: "18px",
  padding: "5px 10px",
  borderRadius: "8px",
  textTransform: "capitalize",
}) as typeof ListItemText;
