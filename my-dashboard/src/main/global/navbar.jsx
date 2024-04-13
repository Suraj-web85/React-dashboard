import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
// import { Box } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
    // const styledBox = styled(Box)`
    // display:flex;
    // background-color:${(props) => props.theme.main.primary[400]}; 
    // border-radius:3px;
    // `;
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box  display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
      <InputBase sx={{ ml: 2 , flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> 
      </Box>
      {/* <div sx={styledBox}>
        <InputBase sx={{ ml: 2 , flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> 
      </div> */}

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? ( <DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Navbar;
