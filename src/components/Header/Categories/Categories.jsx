import * as React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { setListCategories } from 'slices/ProductSlice';
import ListCategories from 'utils/ListCategories';
import CallApiByBody from 'common/ConfigApi/CallApiByBody';


export default function Categories(props) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const listCategories = useSelector(state => state.product.listCategories)

    React.useEffect(() => {
        let getAllCategories = async () => {
            try {
                let reponse = await CallApiByBody("categories/get-all-categories.php", "get", null);
                dispatch(setListCategories(ListCategories(reponse.data.data)));

            }
            catch (e) {
                console.log(e);
            }
        }
        getAllCategories();
    }, [dispatch]);

    console.log(listCategories)


    // list categories render
    const listNav = listCategories.map((category, index) => {
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
    })

    return (
        <Box sx={{ marginTop: "6rem" }}>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    {listCategories.length > 0 ?
                        (
                            <>
                                {listNav}
                                <li>
                                    About us
                                </li>
                                <li>
                                    Other
                                </li>
                                <li>
                                    Other
                                </li>
                            </>
                        )
                        : null}
                </ul >
            </nav >
        </Box >
    );
}