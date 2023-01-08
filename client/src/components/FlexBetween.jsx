import { Box } from "@mui/mertial";
import { style } from "@mui/system";
//Reused CSS
const FlexBetween = styled(Box)({
  //Box Component allows passing of CSS
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
