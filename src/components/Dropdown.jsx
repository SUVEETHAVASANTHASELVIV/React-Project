import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <MenuIcon style={{color:'white'}}/>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>BillSwift</MenuItem>
        <MenuItem onClick={handleClose}>Gift Cards and Payment</MenuItem>
        <MenuItem onClick={handleClose}>Help and Settings</MenuItem>
        <MenuItem onClick={handleClose}>Your account</MenuItem>
        <MenuItem onClick={handleClose}>Customer Service</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
