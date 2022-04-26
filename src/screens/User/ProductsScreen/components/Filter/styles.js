import { makeStyles } from '@mui/styles';

// & a để slect cha đến con như kiểu trog bootrap
// &:hover để hover vào thì hiện ra
// & $secondaryCategories để slect con, tức là select cái class trong make style bên dưới(xem trong nav), bên dưới phải có class đó thì mới css kiểu này đc
//& .MuiAccordion-root:before kiểu css trược tiếp những cái class của mui nên phải ghi liền
//MuiPaper-root-MuiAccordion-root thì ghi đề paper đc luôn k cần phải accordion


//bên dưới là select sâu vào các div bên trong, chẳng hạn 1 cp của MUI có 1 tag nhưng bên trong chứa rất nhiều tag thì ta phải css sâu vào như bên dưới
// vd: bên trong AccordionSummary có chứa tận 3 cái tag html nên ta phải select sâu vào như bên dưới(dòng 28) còn cái AccordionDetail thì tạo 1 class khác



export default makeStyles((theme) => ({
    rootPaper: {
        '&.MuiPaper-root': {
            boxShadow: 'none',
            borderBottom: '1px solid #e0e0e0',
        },
        '& .MuiButtonBase-root': {
            minHeight: 0
        },
        '&.MuiPaper-root:before': {
            display: 'none',
        },
    },
    rootButtonBase: {
        '&.MuiButtonBase-root': {
            padding: '7px 0'
        },
        '& .MuiAccordionSummary-content': {
            margin: 0
        }
    },
    rootAccordionDetails: {
        '&.MuiAccordionDetails-root': {
            padding: '1rem 0'
        }
    }
}));