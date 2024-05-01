import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/data';
import { tokens } from '../../theme';


const Contacts = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const columns=[
    {field:"id",headerName:"ID",flex:0.5},
    {field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},//flex to take the full string width
    {field:"age",headerName:"Age"},
    {field:"phone",headerName:"Phone",flex:1},
    {field:"address",headerName:"Address",flex:1},
    {field:"city",headerName:"City",flex:1},
    {field:"zipCode",headerName:"ZipCode",flex:1},
    {field:"registrarId",headerName:"registrarId",flex:1},
    {field:"email",headerName:"Email",flex:1},
  ]
  return (
    <Box m="20px">
    <Header title='CONTACTS' subTitle='List of Contacts for Future Reference'/>
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
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color :`${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default Contacts