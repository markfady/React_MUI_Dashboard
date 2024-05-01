import { Box,Typography,useTheme } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid ,GridCellParams,GridToolbar} from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/data';
import { tokens } from '../../theme';


const Invoices = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const columns=[
    {field:"id",headerName:"ID",flex:0.5},
    {field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},//flex to take the full string width
    {field:"email",headerName:"Email",flex:1},
    {field:"phone",headerName:"Phone",flex:1},
    {field:"cost",headerName:"Cost",renderCell:(params:GridCellParams)=>{
        const cost = params.row.cost; // Access the 'cost' property from the row data
        return( //use the renderCell function to return the cost value with the $ sign
            <Typography mt="16px" color={colors.greenAccent[500]}>
                ${cost}
            </Typography>
        )
    }},
    {field:"date",headerName:"Date",flex:1},
  ]
  return (
    <Box m="20px">
    <Header title='INVOICES' subTitle='List of Invoices'/>
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
        checkboxSelection   
          rows={mockDataInvoices}
          columns={columns}
          slots={{toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default Invoices