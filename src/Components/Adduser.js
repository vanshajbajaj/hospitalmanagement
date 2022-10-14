import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import "./Adduser.css";

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const Adduser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container id="c1">
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input" className='aul' variant='outlined' style={{color:'white'}}>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' className='auc' style={{color:'white'}} value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='aul' variant='outlined' style={{color:'white'}}>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' className='auc' style={{color:'white'}} value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='aul' variant='outlined' style={{color:'white'}}>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' className='auc' style={{color:'white'}} value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" className='aul' variant='outlined' style={{color:'white'}}>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' className='auc' style={{color:'white'}} value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default Adduser;