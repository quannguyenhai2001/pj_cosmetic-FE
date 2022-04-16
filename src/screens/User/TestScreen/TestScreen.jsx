import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function TestScreen() {
    const mainCategories = useSelector(state => state.product.mainCategories)
    console.log(mainCategories)
    return (
        <>
            {mainCategories.map((category, index) => {
                return (
                    <Box key={index}>
                        <Typography>{category.name}</Typography>
                        <Typography variant="h6" gutterBottom>
                            {category.listChildCategories ? category.listChildCategories.map((childCategory, indexs) => {
                                return (
                                    <Box key={indexs}>
                                        <Typography>{childCategory.id}</Typography>
                                    </Box>

                                )
                            }) : null}
                        </Typography>
                    </Box>
                )
            })}

        </>
    );
}