import axios from "axios";
import { useNavigate } from "react-router";
import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export default function Post({ name, likes, descriptionPost, title, description, url, image, id, postCounter, setPostCounter }) {

  const [liked, setLiked] = useState(false);
  const { userId, token} = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [enabledButton, setEnabledButton] = useState(false);
  const inputRef = useRef(null);
  const [editedText, setEditedText] = useState(descriptionPost);
  const [descriptionShown, setDescriptionShown] = useState(descriptionPost);

  function handleLike() {
    setLiked(!liked);
  }

  function handleEdit() {
    if (editing === false) {
      setEditing(true)
    }
    else {
      setEditing(false)
    }
  }

  function handleKeyUp(e) {
    if (e.keyCode === 27) { 
      setEditing(false); 
    }
  }

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
      document.addEventListener("keyup", handleKeyUp);
    } else {
      document.removeEventListener("keyup", handleKeyUp); 
      setEditedText(descriptionPost)
    }

  }, [editing]);

  function handleTextareaFocus(e) {
    const length = e.target.value.length;
    e.target.setSelectionRange(length, length);
    const target = e.target;
    target.scrollTop = target.scrollHeight - target.clientHeight;
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleSave();
    }
  }



  function handleSave(){
    setEnabledButton(true)
    const post = axios.put(`${process.env.REACT_APP_API_URL}/home/${id}`, {description: editedText}, {headers: {Authorization : `Bearer ${token}`}})
      
    post.then((res) => {
      setPostCounter(postCounter + 1)
      setEditing(false);
    });
    post.catch((err) => {
      console.log(err.response.data.errors)
    alert('unable to update your post')
    setEnabledButton(false)
    })
  }



  return (
    <>
      <BoxPost>
        <ImgProfile
          src={userId.picture_url} alt="" />
        {liked ? <HiHeart color="red" onClick={handleLike} className="heart-icon" /> : <HiOutlineHeart color="white" onClick={handleLike} className="heart-icon" />}
        <LikeCount>{liked ? likes + 2 : likes - 2} likes</LikeCount>
        <RightPost>
          <TitlePost>
            <h1>{name}</h1>

            <Icons>


              <BiEditAlt color="white" onClick={handleEdit} />
              <RiDeleteBin7Fill color="white" onClick={() => alert('oi')} className="edit-icons" />
            </Icons>
          </TitlePost>
          {editing ? (

            

            <StyledInput
              
              type="text"
              required={true}
              ref={inputRef}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onFocus={handleTextareaFocus}
              onKeyDown={handleEnter}
              disabled={enabledButton}
            />

          ) : (
            <h2>{descriptionShown}</h2>
          )}

          <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <BoxPostUrl>
              <InfosPostUrl>
                <p>{title}</p>
                <h3>{description}</h3>
                <h4>{url}</h4>
              </InfosPostUrl>

              <ImgPostUrl src={image} alt="imageUrl" />
            </BoxPostUrl>
          </a>
        </RightPost>
      </BoxPost>
    </>
  )
}

const BoxPost = styled.div`
background: #171717;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
height: 280px;
margin-top: 43px;
margin-bottom: 16px;
padding: 21px;
display: flex;
position: relative;

.heart-icon {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 90px;
  left: 30px;
}

@media (max-width: 800px) {
    border-radius: 0px;
    margin-top: 19px;
    max-height: 260px;
  }
`

const BoxPostUrl = styled.div`
background: #171717;
border: 1px solid #4D4D4D;
border-radius: 11px;
max-height: 200px;
display: flex;
text-decoration: none;
@media (max-width: 800px) {
    margin-top: 19px;
    max-height: 158px;
  }
`

const ImgProfile = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`

const InfosPostUrl = styled.div`
display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: space-between;
  padding: 16px;
  text-decoration: none;
  word-wrap: break-word;
  p{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;
  }
  h3 {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
  }
  h4{
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
  }
  @media (max-width: 800px) {
    padding: 11px;
    p{
        font-size: 11px;
    }
    h3, h4{
        font-size: 9px;
    }
    
  }
`

const ImgPostUrl = styled.img`
width:40%;
max-height:100%;
border-radius: 0px 12px 13px 0px;
`
const RightPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 100%;
  justify-content: space-between;
  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #FFFFFF;
  }
  h2{
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #B7B7B7;
  }
  @media (max-width: 800px) {
h1{
    font-size:17px;
}
h2{
    font-size:15px;
}
  }
`;

const LikeCount = styled.span`
  position: absolute;
  top: 120px;
  left: 25px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #FFFFFF;
`;

const TitlePost = styled.div`
display:flex;
justify-content:space-between;
`

const Icons = styled.div`
display:flex;
justify-content:flex-end;
.edit-icons {
margin-left: 12.53px;
}
`

const StyledInput = styled.textarea`
color: #4C4C4C;
font-weight: 400;
font-size: 14px;
line-height: 17px;
background-color: #FFFFFF;
border-radius: 7px;
border: none;
word-wrap: break-word;
resize: vertical;
overflow: auto;
&:focus {
    outline: none;
    border: none;
  }
`