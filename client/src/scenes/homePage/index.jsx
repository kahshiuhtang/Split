import { Box, useMediaQuery } from "@mui/material";
import NavBar from "scenes/navBar";
import UserWidget from "scenes/widgets/UserWidget";

const HomePage = () => {
  const isNoneMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <NavBar />
      {/* In a row if not vitrual, otherise in column */}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNoneMobileScreens ? "flex" : "block"}
        justifyContent="space-between"
      >
        <Box flexBasis={isNoneMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}></UserWidget>
        </Box>
        <Box
          flexBasis={isNoneMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        ></Box>
        {isNoneMobileScreens && <Box flexBasis="26%"></Box>}
      </Box>
    </Box>
  );
};
export default HomePage;
