import React from 'react'
import { MenuItem } from 'react-pro-sidebar'
import { tokens } from '../theme'
import { Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { SvgIconComponent } from '@mui/icons-material';


interface IItem{
    title:string
    to:string
    icon: React.ReactNode;
    selected:string
    setSelected:(title:string)=>void
}

const Item = ({title,to,icon,selected,setSelected}:IItem) => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
  return (
        <MenuItem active={selected===title} style={{color:colors.grey[100]}} onClick={()=>setSelected(title)} icon={icon}>
        <Typography>{title}</Typography>
        <Link to={to}/>
        </MenuItem>
  )
}

export default Item