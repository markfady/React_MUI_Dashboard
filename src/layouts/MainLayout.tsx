import { Outlet } from "react-router-dom";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import { Box } from "@mui/material";


const MainLayout = () => {
  return (
    <>
    <Box height="100vh" display="flex">
    <Sidebar />
    <Box flexGrow={1} display="flex" flexDirection="column"> {/* flex grow when found a empty space on use it , so justify content of the header works */}
    <Topbar/>
        <Outlet />
      </Box>

    </Box>

         

         
      </>
  );
};
export default MainLayout;