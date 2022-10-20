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
    width: 70%;
    margin: 5% 0 0 25%;
    // box-shadow: 0px 0px 5px 1px #bc7a17b1;
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
        <Container id="c1e" style={{backgroundColor:'rgba(40, 39, 39, 0.15)'}}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input" className='cule' variant='outlined' style={{color:'white'}}>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} className='cuce' name='name' style={{color:'white'}} value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='cule' variant='outlined' style={{color:'white'}}>Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} className='cuce' name='username' style={{color:'white'}} value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='cule' variant='outlined' style={{color:'white'}}>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} className='cuce' name='email' style={{color:'white'}} value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='cule' variant='outlined' style={{color:'white'}}>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} className='cuce' name='phone' style={{color:'white'}} value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" style={{backgroundColor:'#2b6777',boxShadow:'0px 0px 4px 0px white'}} onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default Edituser;