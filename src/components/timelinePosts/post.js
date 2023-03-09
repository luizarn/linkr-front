import { useNavigate } from "react-router";
import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import axios from 'axios'
export default function Post() {

  const navigate = useNavigate();

  const tagStyle = {
      fontWeight: 700,
      cursor: 'pointer'
  }

  async function handleTagClick(tag) {
      if(tag.type === 'hashtag'){
        navigate(`/hashtag/${tag.value}`);
      } else if(tag.type === 'user') {
        const id = await getUserId(tag.value); // esse tag.value é o nome do usuário pra poder usar na pesquisa
        navigate(`/user/${id}`)
      }
  }

  async function getUserId(username){
      const user = axios.get('endpoint da query')
      return user.data.id

  }

  return (
        <>
        <BoxPost>
            <ImgProfile
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt=""/>
                 <RightPost>
                     <h1>Name</h1>
                      <ReactTagify
                        tagStyle={tagStyle}
                        mentionStyle={tagStyle}
                        tagClicked={handleTagClick()}
                      >
                          <h2>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</h2>
                      </ReactTagify>
              <BoxPostUrl>
        <InfosPostUrl>
            <p>Como aplicar o Material UI em um projeto React</p>
            <h3>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</h3>
            <h4>https://medium.com/@pshrmn/a-simple-react-router</h4>
        </InfosPostUrl>

        <ImgPostUrl src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt=""/>
                     </BoxPostUrl>
                 </RightPost>
                 </BoxPost>
        </>
  )
}

const BoxPost = styled.div`
background: #171717;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
height: 276px;
margin-top: 43px;
margin-bottom: 16px;
padding: 21px;
display: flex;
@media (max-width: 800px) {
    border-radius: 0px;
    margin-top: 19px;
    height: 234px;
  }
`

const BoxPostUrl = styled.div`
background: #171717;
border: 1px solid #4D4D4D;
border-radius: 11px;
height: 155px;
display: flex;
@media (max-width: 800px) {
    margin-top: 19px;
    height: 115px;
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
  width: 100%;
  justify-content: space-between;
  padding: 16px;
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
height:100%;
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
