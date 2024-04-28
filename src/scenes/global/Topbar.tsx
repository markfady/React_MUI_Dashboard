import { Box, IconButton, InputBase, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlined from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIconOutlined from "@mui/icons-material/Search"

const Topbar = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode)
  const colorMode=useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*Search Bar*/}
      <Box display="flex" bgcolor={colors.primary[400] } borderRadius="3px">
        <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
        <IconButton type="button" sx={{p:1}}>
    <SearchIconOutlined/>
        </IconButton>
      </Box>
        {/*Icons */}
        <Box display="flex">
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode=="dark"?(<DarkModeOutlined/>) :(<LightModeOutlined/>)}
    </IconButton>
      <IconButton>
      <NotificationsOutlined/>
      </IconButton>
      <IconButton>
      <SettingsOutlined/>
      </IconButton>
      <IconButton>
      <PersonOutlinedIcon/>
      </IconButton>
        </Box>
    
    </Box>
  )
}

export default Topbar