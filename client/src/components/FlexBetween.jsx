import { Box } from "@mui/material";
import { styled } from "@mui/system";
//Reused CSS
const FlexBetween = styled(Box)({
  //Box Component allows passing of CSS
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
