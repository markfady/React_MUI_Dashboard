import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/data';
import { tokens } from '../../theme';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';

const ManageTeam = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const columns=[
    {field:"id",headerName:"ID"},
    {field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},//flex to take the full string width
    {field:"age",headerName:"Age"},
    {field:"phone",headerName:"Phone",flex:1},
    {field:"email",headerName:"Email",flex:1},
    {field:"access",headerName:"Access Level",flex:1,
    renderCell:(params: GridCellParams)=>{
      const access = params.row.access; // Access the 'access' property from the row data
      return(
        <Box
          width="65%"
          m="10px auto"
          p="5px"
          display="flex"
          justifyContent="center"
          bgcolor={access==="admin"?colors.greenAccent[600]:colors.greenAccent[700]}
          borderRadius="4px"
        >
          {access==="admin"&&<AdminPanelSettingsOutlined/>}
          {access==="manager"&&<SecurityOutlined/>}
          {access==="user"&&<LockOpenOutlined/>}
          <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
            {access}
          </Typography>
        </Box>
      )
    }}
  ]
  return (
    <Box m="20px">
    <Header title='MANAGE TEAM' subTitle='Welcome to your ManageTeam'/>
    <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none !important"
          },
          "& .MuiDataGrid-cell": {
            border: "none !important"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            border: "none !important"
          },
          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
            backgroundColor:`${colors.blueAccent[700]} !important`,
            border: "none !important"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none !important",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .css-tgsonj ":{
            border: "none !important"
          }
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default ManageTeam