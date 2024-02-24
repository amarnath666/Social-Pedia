import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersForSidebar } from "state/messageSlice";
import { List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

function Sidebar () {
    const users = useSelector((state) => state.users.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersForSidebar());
    }, [dispatch]);


    return (
        <div sx={{ backgroundColor: "#fofofo", width: 240, flexShrink:0, overflowY: "auto" }}>
            <Typography variant="h6" sx={{ paddingLeft: 2, paddingTop: 1 }}>
                Users
            </Typography>
            <Divider />
            <List>
                {users.map(user => (
                    <ListItem button key={user.id} sx={{ "&:hover": { backgroundColor: "#e0e0e0"}}}>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary={user.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Sidebar;