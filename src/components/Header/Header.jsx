import * as React from 'react';
// import useStyles from './styles';
import Categories from './Categories/Categories';
import NavBar from './Navbar/Navbar';
import { Box } from '@mui/material';
import decode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { deleteUserDetail } from 'slices/UserSlice';


export default function Header() {
    const dipatch = useDispatch();
    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodeToken = decode(token)
            if (decodeToken.exp * 1000 < new Date().getTime()) {
                dipatch(deleteUserDetail())
            }
        }
    }, [dipatch])
    return (
        <Box>
            <NavBar />
            <Categories />
        </Box >
    );
}