import React from 'react'
import HeaderImage from '../assets/img/Header.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    return (
        <div className='w-full relative bg-white'>
            <div className='bg-white w-full'>
                <img height='100%' width='100%' className='sticky top-0 z-50' src={HeaderImage}></img>
            </div>
        </div>
    )
}

export default Header


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// // Replace this with the path to your image
// import HeaderImage from '../assets/img/Header.png';

// export default function MenuAppBar() {
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           {/* Image in the AppBar */}
//           <Box sx={{ flexGrow: 1 }}>
//             <img
//               src={HeaderImage}
//               alt="Header"
//               style={{
//                 width: '100%', // Make the image take up the full width
//                 height: 'auto', // Maintain aspect ratio
//                 objectFit: 'cover', // Ensure the image covers the space
//               }}
//             />
//           </Box>
          
//           {/* Account menu */}
//           {auth && (
//             <div>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


