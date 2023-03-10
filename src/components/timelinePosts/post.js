import axios from "axios";
import { useNavigate } from "react-router";
import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import {HiOutlineHeart, HiHeart} from "react-icons/hi";
import { useState } from "react";


export default function Post({name, likes, descriptionPost,title,description,url,image}) {

  // const navigate = useNavigate();

  // const tagStyle = {
  //     fontWeight: 700,
  //     cursor: 'pointer'
  // }

  // async function handleTagClick(tag) {
  //     if(tag.type === 'hashtag'){
  //       navigate(`/hashtag/${tag.value}`);
  //     } else if(tag.type === 'user') {
  //       const id = await getUserId(tag.value); // esse tag.value é o nome do usuário pra poder usar na pesquisa
  //       navigate(`/user/${id}`)
  //     }
  // }

  // async function getUserId(username){
  //     const user = axios.get('endpoint da query')
  //     return user.data.id

  // }

  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
        <>
        <BoxPost>
            <ImgProfile
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt=""/>
          {liked ? <HiHeart color="red" onClick={handleLike} className="heart-icon"/> : <HiOutlineHeart color="white" onClick={handleLike} className="heart-icon"/>}
         <LikeCount>{liked ? likes + 1 : likes - 1} likes</LikeCount>
                 <RightPost>
                     <h1>{name}</h1>
                      {/* <ReactTagify
                        tagStyle={tagStyle}
                        mentionStyle={tagStyle}
                        tagClicked={handleTagClick()}
                      > */}
                          <h2>{descriptionPost}</h2>
                      {/* </ReactTagify> */}
        <a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
              <BoxPostUrl>
        <InfosPostUrl>
            <p>{title}</p>
            <h3>{description}</h3>
            <h4>{url}</h4>
        </InfosPostUrl>

        <ImgPostUrl src={image}alt="imageUrl"/>
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