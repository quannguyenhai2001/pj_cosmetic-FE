import { makeStyles } from '@mui/styles';

// & a để slect cha đến con như kiểu trog bootrap
// &:hover để hover vào thì hiện ra
// & $secondaryCategories để slect con, tức là select cái class trong make style bên dưới(xem trong categories)
//&.MuiAccordion-root:before kiểu css trược tiếp những cái class của mui nên phải ghi liền
//MuiPaper-root-MuiAccordion-root thì ghi đề paper đc luôn k cần phải accordion
export default makeStyles((theme) => ({
    rootPaper: {
        '&.MuiPaper-root': {
            boxShadow: 'none',
            borderBottom: '1px solid #e0e0e0',
        },
        '&.MuiPaper-root:before': {
            display: 'none',
        },
    },
    rootButtonBase: {
        '&.MuiButtonBase-root': {
            padding: 0
        }
    },
    rootAccordionDetails: {
        '&.MuiAccordionDetails-root': {
            padding: '1rem 0'
        }
    }
}));