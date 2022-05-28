import React, { memo } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import useStyles from './styles';
function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>

            )}
        </Box>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const TabContent = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const params = useParams();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', marginBottom: '2rem' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={classes.rootTab}>
                    <Tab label="All" {...a11yProps(0)} onClick={() => navigate(`/user/${params.id}/order/all`)} />
                    <Tab label="Delivering" {...a11yProps(1)} onClick={() => navigate(`/user/${params.id}/order/delivering`)} />
                    <Tab label="Delivered" {...a11yProps(2)} onClick={() => navigate(`/user/${params.id}/order/delivered`)} />
                </Tabs>
            </Box>
            <TabPanel sx={{ height: 'fit-content' }} value={value} index={0}>
                {props.children}
            </TabPanel>
            <TabPanel sx={{ height: 'fit-content' }} value={value} index={1}>
                {props.children}
            </TabPanel>
            <TabPanel sx={{ height: 'fit-content' }} value={value} index={2}>
                {props.children}
            </TabPanel>
        </Box>
    );
};

export default memo(TabContent);