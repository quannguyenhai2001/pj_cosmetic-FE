import * as React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Categories(props) {
    const classes = useStyles();
    const mainCategories = useSelector(state => state.product.mainCategories)



    return (
        <Box sx={{ marginTop: "7.5rem" }}>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    {mainCategories.map((category, index) => {
                        return (
                            <li key={index} className={classes.primaryCategories}>
                                {category.name}
                                <ul className={classes.secondaryCategories}>
                                    <Grid container spacing={4}>
                                        {category.listChildCategories ? category.listChildCategories.map((childCategory, index) => {
                                            return (
                                                <Grid item xs={3} key={index}>
                                                    <Link to={`/products/${childCategory.id}`}> {childCategory.name}</Link>
                                                </Grid>

                                            )
                                        }) : null}
                                    </Grid>
                                </ul>
                            </li>
                        )
                    })}
                    <li>
                        About us
                    </li>
                    <li>
                        Other
                    </li>
                    <li>
                        Other
                    </li>
                </ul >
            </nav >
        </Box >
    );
}