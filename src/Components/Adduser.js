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
    width: 70%;
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
        <Container id="c1" style={{backgroundColor:'rgba(40, 39, 39, 0.15)'}}>
            <Typography variant="h4" style={{color:'#2b6777',fontWeight:600,textDecoration:'underline',textShadow:'0px 0px 7px white'}}>
                Add Patient
            </Typography>
            <FormControl className='addusermidfc'>
                <InputLabel htmlFor="my-input" className='aul' variant='outlined' style={{color:'white'}}>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' className='auc' style={{color:'white'}} value={name} id="my-input" />
            </FormControl>
            <FormControl className='addusermidfc'>
                <InputLabel htmlFor="my-input" className='aul' variant='outlined' style={{color:'white'}}>Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' className='auc' style={{color:'white'}} value={username} id="my-input" />
            </FormControl>
            <FormControl className='addusermidfc'>
                <InputLabel htmlFor="my-input" className='aul' variant='outlined' style={{color:'white'}}>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' className='auc' style={{color:'white'}} value={email} id="my-input"/>
            </FormControl>
            <FormControl className='addusermidfc'>
                <InputLabel htmlFor="my-input" className='aul' variant='outlined' style={{color:'white'}}>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' className='auc' style={{color:'white'}} value={phone} id="my-input" />
            </FormControl>
            <FormControl className='addusermidfc'>
                <Button variant="contained"
                style={{backgroundColor:'#2b6777',boxShadow:'0px 0px 4px 0px white'}}
                color="primary" onClick={() => addUserDetails()}>Add Patient</Button>
            </FormControl>
        </Container>
    )
}

export default Adduser;