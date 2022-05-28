import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    boxForm: {
        borderRadius: '12px',
        background: '#ffffff',
        boxShadow: "9px 9px 16px #dedede,- 9px - 9px 16px #ffffff",
    },

    Typo: {
        textAlign: 'end',
        height: 'fit-content',

    },
    rootTypo: {
        '&.MuiTypography-root': {
            marginBottom: '4rem',
        },
        '&.MuiTypography-root:first-child': {
            marginTop: '1rem'
        }
    },


    rootTyp1: {
        '&.MuiTypography-root': {
            margin: '2rem 0 1.2rem 0',
        }
    },
    rootTextField: {
        '&.MuiFormControl-root': {
            marginBottom: '2.5rem',
            display: 'block',
            '& input': {
                width: '37rem',

            }
        }
    },
    rootTextField1: {
        '&.MuiFormControl-root': {
            margin: '1.8rem 0',
            display: 'block',
            '& input': {
                width: '20rem',

            }
        }
    },
}));