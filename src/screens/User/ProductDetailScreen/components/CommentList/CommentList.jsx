import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./CommentList.scss"
import { Avatar, Box, Divider, Grid, List, ListItem, TextField, Typography } from '@mui/material';
import useStyles from './styles';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const CommentList = (props) => {
  const listComment = useSelector(state => state.product.listComments)
  const user = useSelector(state => state.user.userDetail)
  const classes = useStyles();
  console.log(user)
  const [conditionIcon, SetConditionIcon] = useState(false)

  //mở ô input
  const [conditionInput, SetConditionInput] = useState(false)
  const [valueEdit, setValueEdit] = useState({
    content: "test"
  })
  const [alo, setAlo] = useState("")
  const dispatch = useDispatch()
  const clickIconHandle = () => {
    SetConditionIcon(!conditionIcon)
    console.log("fgfg")
  }
  const clickEditHandle = (content, index) => {
    SetConditionInput(!conditionInput)
    SetConditionIcon(!conditionIcon)
    setValueEdit({ ...valueEdit, content: content })
    setAlo(index)


  }
  const deleteCommentHandle = (e) => {
    let index = listComment.indexOf(e)
    // dispatch(DeleteComment(index))
  }
  const submitCommemtHandle = (e) => {
    e.preventDefault()
  }
  const click1 = (e) => {
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
        return (<Box className="comment-each" key={index}>
          <Grid container>
            <Grid item >
              <Box className="comment-each-avatar">
                <Avatar>H</Avatar>
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box className="comment-each-content">
                <div className="comment-each-content_title">{value.displayName}</div>
                <form onSubmit={submitCommemtHandle}>
                  <div className="comment-content-box-input">
                    <TextField fullWidth value={conditionInput && alo === value.id ? (valueEdit.content) : (value.content || "")} onChange={onChangeComment} id="standard-basic" variant="standard" disabled={conditionInput && alo === value.id ? false : true} />
                  </div>
                </form>
                {/* <div className="comment-content__react">
              <ThumbUpOutlinedIcon />
              <ThumbUpOutlinedIcon />
              <span>Feedback</span>
            </div> */}
                <div className="comment-each-box">
                  {/*click hiện bảng chọn, class là đang set đk click edit thì mất icon*/}
                  <MoreVertIcon onClick={clickIconHandle} className={conditionInput ? "display--none" : "fas fa-ellipsis-v"} />
                  <div className={conditionIcon ? "comment-each-box__content" : "display--none"}>
                    {value.user_Id === user.id ?
                      (

                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                          <ListItem onClick={() => clickEditHandle(value.content, value.id)} className={classes.rootListItem} disablePadding>
                            <Box sx={{ marginRight: 1 }}>
                              <AccountCircleIcon />
                            </Box>
                            <Typography to={`/user/${user.id}`} sx={{ transform: 'translateY(-1px)' }}>
                              edit
                            </Typography>
                          </ListItem>
                          <Divider sx={{ margin: '0.5rem 0' }} />
                          <ListItem onClick={() => deleteCommentHandle(value)} className={classes.rootListItem} disablePadding>
                            <Box sx={{ marginRight: 1 }}>
                              <LogoutIcon />
                            </Box>
                            <Typography>
                              Log delete
                            </Typography>
                          </ListItem>

                        </List>
                      ) :
                      (
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }} className={classes.rootList} disablePadding>
                          <ListItem className={classes.rootListItem} disablePadding>
                            <Box sx={{ marginRight: 1 }}>
                              <AccountCircleIcon />
                            </Box>
                            <Typography to={`/user/${user.id}`}>
                              edit
                            </Typography>
                          </ListItem>
                        </List>
                      )}

                  </div>

                </div>
              </Box>

              <div className="comment-each-content_button">
                <button onClick={() => click1(value.idEvaluate)} className={conditionInput && alo === value.id ? "display--block" : "display--none"}>Save</button>
              </div>
            </Grid>
          </Grid>
        </Box>)
      })
    )
  return (
    <div className="comment-list">
      {render}
    </div>
  );
};

export default CommentList;