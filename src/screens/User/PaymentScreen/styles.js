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
            margin: '3rem 0',
        }
    },


    rootTyp1: {
        '&.MuiTypography-root': {
            margin: '2rem 0 1.2rem 0',
        }
    },
    rootTextField: {
        '&.MuiFormControl-root': {
            margin: '2rem 0',
            display: 'block',
            '& input': {
                width: '15rem',

            }
        }
    },
    rootTextField1: {
        '&.MuiFormControl-root': {
            margin: '1.8rem 0',
            display: 'block',
            '& input': {
                width: '37rem',

            }
        }
    },
}));