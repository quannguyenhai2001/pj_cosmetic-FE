import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Button, Divider, Grid, List, ListItem, TextField, Typography } from '@mui/material';
import useStyles from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ElevatorIcon from '@mui/icons-material/Elevator';
//create circle avatar
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: '40px',
      height: '40px',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const CommentList = (props) => {
  const listComment = useSelector(state => state.product.listComments)
  const user = useSelector(state => state.user.userDetail)
  const classes = useStyles();

  //tắt mở box edit or evaluate
  const [conditionIcon, SetConditionIcon] = useState(false)

  //mở ô input
  const [conditionInput, SetConditionInput] = useState(false)
  const [valueEdit, setValueEdit] = useState({
    content: ""
  })

  const [idCommentEdit, setIdCommentEdit] = useState("")
  const dispatch = useDispatch()
  const clickIconHandle = () => {
    SetConditionIcon(!conditionIcon)
    console.log("fgfg")
  }


  const handleIconEdit = (content, index) => {
    SetConditionInput(!conditionInput)
    SetConditionIcon(!conditionIcon)
    setValueEdit({ ...valueEdit, content: content })
    setIdCommentEdit(index)


  }
  const deleteCommentHandle = (e) => {
    let index = listComment.indexOf(e)
    // dispatch(DeleteComment(index))
  }
  const submitCommemtHandle = (e) => {
    e.preventDefault()
  }
  const handleEdit = (e) => {
    // dispatch(fetchAsyncEditComment({
    //   idEvaluate: e,
    //   valueEditComment: valueEdit
    // }))
    SetConditionInput(!conditionInput)
  }

  const onChangeComment = (e) => {
    const target = e.target
    setValueEdit({ ...valueEdit, content: target.value })
  }


  const render = (listComment.length) === 0 ? (<div>loading...</div>) :
    (
      listComment.map((value, index) => {
        return (<Box className={classes.eachComment} key={index}>
          <Grid container>
            <Grid item >
              <Box>
                {value.avatar ? (
                  <Avatar className={classes.rootAvatar} src={value.avatar} />
                ) : (
                  <Avatar className={classes.rootAvatar} {...stringAvatar(value.displayName)} />
                )}
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box className={classes.eachCommentContent}>
                <Typography component="span" sx={{ fontWeight: "600", fontSize: "1.7rem", marginRight: '0.4rem' }}>{value.displayName}</Typography>
                <Typography component="span">{value.cmtDate}</Typography>
                <form onSubmit={submitCommemtHandle}>

                  <TextField autoFocus={conditionInput && idCommentEdit === value.id ? true : false} className={classes.rootTextField} fullWidth value={conditionInput && idCommentEdit === value.id ? (valueEdit.content) : (value.content || "")} onChange={onChangeComment} id="standard-basic" variant="standard" disabled={conditionInput && idCommentEdit === value.id ? false : true} />

                </form>
                {/* <div className="comment-content__react">
                  <ThumbUpOutlinedIcon />
                  <ThumbUpOutlinedIcon />
                  <span>Feedback</span>
                </div> */}
                <Box className={classes.eachCommentBoxEdit}>

                  {/*click hiện bảng chọn, class là đang set đk click edit thì mất icon*/}
                  <MoreVertIcon onClick={clickIconHandle} className={conditionInput ? classes.displayNone : classes.rootIcon} />
                  <Box className={conditionIcon ? "comment-each-box__content" : classes.displayNone}>
                    {value.user_Id === user.id ?
                      (

                        <List className={classes.rootList} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                          <ListItem onClick={() => handleIconEdit(value.content, value.id)} className={classes.rootListItem} disablePadding>
                            <Box sx={{ marginRight: 1 }}>
                              <EditIcon />
                            </Box>
                            <Typography to={`/user/${user.id}`} sx={{ transform: 'translateY(-1px)' }}>
                              Edit
                            </Typography>
                          </ListItem>
                          <Divider sx={{ margin: '0.5rem 0' }} />
                          <ListItem onClick={() => deleteCommentHandle(value)} className={classes.rootListItem} disablePadding>
                            <Box sx={{ marginRight: 1 }}>
                              <DeleteIcon />
                            </Box>
                            <Typography>
                              delete
                            </Typography>
                          </ListItem>

                        </List>
                      ) :
                      (
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }} className={classes.rootList} disablePadding>
                          <ListItem className={classes.rootListItem} disablePadding>
                            <Box sx={{ marginRight: 1 }}>
                              <ElevatorIcon />
                            </Box>
                            <Typography to={`/user/${user.id}`}>
                              Evaluate
                            </Typography>
                          </ListItem>
                        </List>
                      )}

                  </Box>

                </Box>
              </Box>

              <Box className={classes.eachCommentButton}>
                <Button onClick={() => handleEdit(value.id)} variant="contained" className={conditionInput && idCommentEdit === value.id ? classes.displayBlock : classes.displayNone}>Save</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>)
      })
    )
  return (
    <Box className={classes.box}>
      {render}
    </Box>
  );
};

export default CommentList;