import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../service/api';
import "./Edituser.css";

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    box-shadow: 0px 0px 5px 1px #bc7a17b1;
    & > div {
        margin-top: 20px
`;


const Edituser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Typography variant="h4" id="c1">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input" className='cul' variant='outlined' style={{color:'white'}}>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} className='cuc' name='name' style={{color:'white'}} value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='cul' variant='outlined' style={{color:'white'}}>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} className='cuc' name='username' style={{color:'white'}} value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='cul' variant='outlined' style={{color:'white'}}>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} className='cuc' name='email' style={{color:'white'}} value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='cul' variant='outlined' style={{color:'white'}}>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} className='cuc' name='phone' style={{color:'white'}} value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default Edituser;