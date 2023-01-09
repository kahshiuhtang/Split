import { Box, useMediaQuery } from "@mui/material";
import NavBar from "scenes/navBar";
import UserWidget from "scenes/widgets/UserWidget";
import { useSelector } from "react-redux";
import MyPostWidget from "scenes/widgets/MyPostWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <NavBar />
      {/* In a row if not vitrual, otherise in column */}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}></UserWidget>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%"></Box>}
      </Box>
    </Box>
  );
};
export default HomePage;
