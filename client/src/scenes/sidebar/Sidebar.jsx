import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { selectToken } from "state/authSlice";

const Sidebar = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = useSelector(selectToken);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3001/getUsers", {
                           method: "GET",
                            headers: {
                              "Content-Type": "application/json",
                              "Authorization": `Bearer ${token}`
                            }
                        });
                if (!response.ok) {
                    throw new Error("Failed to fetch users for sidebar");
                }
                const data = await response.json();
                console.log("users", data);
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchUsers();

    }, []);

    return (
        <div sx={{ backgroundColor: "#fofofo", width: 240, flexShrink: 0, overflowY: "auto" }}>
            <Typography variant="h6" sx={{ paddingLeft: 2, paddingTop: 1 }}>
                Users
            </Typography>
            <Divider />
            {loading ? (
                <Typography variant="body1" sx={{ paddingLeft: 2, paddingTop: 1 }}>
                    Loading...
                </Typography>
            ) : (
                <List>
                    {users.map(user => (
                        <ListItem button key={user._id} sx={{ "&:hover": { backgroundColor: "#e0e0e0" } }}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary={user.firstName} />
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
}

export default Sidebar;
