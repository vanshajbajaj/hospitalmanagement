import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
import "./Alluser.css";
import logo2 from "./../logos/MyWorld-logos_white.png"
import { useNavigate } from "react-router-dom";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
    box-shadow: 0px 0px 8px 2px #bc7a17b1;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        //background: #000000;
        color: #FFFFFF;
        background-color: rgba(255, 255, 255, 0.20);
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px;
        background-color: rgba(255, 255, 255, 0.07);
        color:white;
    }
`;


const Alluser = () => {
    const [users, setUsers] = useState([]);

    let navigate = useNavigate();
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <div>
        <StyledTable id="tableall">
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button id="btte" color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button id="bttd" color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        <Button id="btta" color="secondary" variant="contained" onClick={() =>{navigate("/add");} }>Add user</Button>
        </div>
    )
}

export default Alluser;