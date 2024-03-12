import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

// const Logout = styled(googleLogout)`
//     border: none;
//     box-shadow: none;
// `;



const HeaderMenu = ({setOpenDrawer}) => {
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };


    return (
    <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
                </Menu>
            </>
            )
}

 export default HeaderMenu;
