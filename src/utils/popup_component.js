import {MenuItem, Popover} from "@mui/material";
import {Iconify} from "../components/iconify";
import React from "react";

const PopupComponent = ({open,handleCloseMenu,}) => {
    return (
        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleCloseMenu}
            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            PaperProps={{
                sx: {
                    p: 1,
                    width: 140,
                    '& .MuiMenuItem-root': {
                        px: 1,
                        typography: 'body2',
                        borderRadius: 0.75,
                    },
                },
            }}
        >
            <MenuItem>
                <Iconify icon={'eva:edit-fill'} sx={{mr: 2}}/>
                Edit
            </MenuItem>

            <MenuItem sx={{color: 'error.main'}}>
                <Iconify icon={'eva:trash-2-outline'} sx={{mr: 2}}/>
                Delete
            </MenuItem>
        </Popover>
    );
};

export default PopupComponent;