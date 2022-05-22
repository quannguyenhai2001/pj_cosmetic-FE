import * as React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { setListCategories } from 'slices/ProductSlice';
import ListCategories from 'utils/ListCategories';
import CallApiByBody from 'common/ConfigApi/CallApiByBody';


export default function Categories(props) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const params = useParams();
    const listCategories = useSelector(state => state.product.listCategories)

    React.useEffect(() => {
        let getAllCategories = async () => {
            try {
                let response = await CallApiByBody("categories/get-all-categories.php", "get", null);
                dispatch(setListCategories(ListCategories(response.data.data)));
            }
            catch (e) {
                console.log(e);
            }
        }
        getAllCategories();
    }, [dispatch]);



    //hidden nav
    const [isCheck, setIsCheck] = React.useState(false);
    const handleHiddenNav = () => {
        setIsCheck(true);
    }
    //check if have param in url
    React.useEffect(() => {
        if (isCheck) {
            setIsCheck(false)
            console.log("check")
        }
    }, [params.categoryId, isCheck]);


    const handleMouseLeave = (event) => {
        if (event.target.id === 'overlay') {
            setIsCheck(true)
        }
    }
    // list categories render
    const listNav = listCategories.map((category, index) => {
        return (
            <li key={index} className={classes.primaryCategories}>
                {category.name}
                <ul className={!isCheck ? classes.secondaryCategories : classes.isOff}  >
                    <Grid container spacing={3}>
                        {category.listChildCategories ? category.listChildCategories.map((childCategory, index) => {
                            return (
                                <Grid item xs={3} key={index} >
                                    <Box sx={{ display: 'grid', placeItems: 'center' }} >
                                        <Box className={classes.boxEachChildCate} onClick={handleHiddenNav}>
                                            <Typography component={Link} to={`/products/${childCategory.id}`} className={classes.eachChildCate}> {childCategory.name}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                            )
                        }) : null}
                    </Grid>
                </ul>
                <Box id="overlay" className={!isCheck ? classes.overlay : classes.isOff} >

                </Box>
            </li>
        )
    })

    return (
        <Box sx={{ marginTop: "6rem" }} onMouseMove={handleMouseLeave}>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    {listCategories.length > 0 ?
                        (
                            <>
                                {listNav}
                                <li>
                                    Blogs
                                </li>
                                <li>
                                    About us
                                </li>
                                <li>
                                    Contact
                                </li>
                            </>
                        )
                        : null}
                </ul >
            </nav >
        </Box >
    );
}