import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Post from "../../components/timelinePosts/post";
import TrendingTags from "../../components/TrendingTags/TrendingTags";


export default function TimelinePage() {
    
    // const { token } = useContext(tokenContext)
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [isPublishing, setIsPublishing] = useState(false);
    const [posts, setPosts] = useState([])


    // useEffect(() => {
    //     const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, {
    //       headers:
    //         { Authorization: `Bearer ${token}`, user }
    //     })
    //     promise.then(res => {
    //       console.log(res.data)
    //       setPosts(res.data)
    //     })
    
    //     promise.catch(err => console.log(err.response.data))
    
    //   }, [ addPost()]);
  
    

    function addPost(e) {
        e.preventDefault()
        // setIsPublishing(true);

        // const body = {url, description }

        // const promise = axios.post(`${process.env.REACT_APP_API_URL}/new-entrance`, body, {
        // //   headers:
        // //     { Authorization: `Bearer ${token}`, user }
        // })

    
        // promise.then(res => {
        //   console.log(res.data)
        //   console.log(res.data.token)
        //   setUrl("")
        //   setIsPublishing(false)
        //   console.log(posts)
        // })
        // promise.catch(err => {
        //   console.log(err.response.data.message)
        //   alert("There was an error publishing your link")
        //   setIsPublishing(false)
        // })

    }


    return (
        <>
            <Content>
                <Header/>
                <Container>
                  <P1>
                  <Title>timeline</Title>
                  <BoxAddPost>
                  <ImgProfile
                    src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt=""/>
                    <RightBoxPost>
                        <h1>What are you going to share today?</h1>
                        <FormPost onSubmit={(e) => addPost(e)}>
                
                  <NormalInput required onChange={(e) => setUrl(e.target.value)} placeholder="http:// ..." type="url" disabled={isPublishing} />
                  <BigInput onChange={(e) => setDescription(e.target.value)} placeholder="Awesome article about #javascript" type="text" disabled={isPublishing} />
                  <button type="submit" disabled={isPublishing}>{isPublishing? 'Publishing...' : 'Publish'}</button>
                </FormPost>
                    </RightBoxPost>
          
                </BoxAddPost>

                <div>
                {/* {posts.map((p) => (
                    <Post
                    url = {p.url}
                    description = {p.description}
                    />
                ))} */}
                <Post />
                <Post />
                </div>
                   </P1>
                   <P2>
                     <TagsDiv>
                       <TrendingTags/>
                     </TagsDiv>
                   </P2>
                </Container>
            </Content>

           
        </>

    );
}
const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
;

export const Title = styled.h1`
    margin-top: 130px;
    font-weight: 700;
    font-size: 43px;
    color: #ffffff;
    /* padding: 10px 0 0 15px; */
    @media (max-width: 800px) {
   margin-left: 17px;
   font-size: 33px;
  }
`
const Container = styled.div`
margin-top: 130px;
  margin: 0 auto;
    width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

const BoxAddPost = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
height: 209px;
margin-top: 43px;
padding: 16px;
display: flex;
@media (max-width: 800px) {
    border-radius: 0px;
    margin-top: 19px;
    padding: 15px;
    img{
        width: 0px;
        height: 0px;
    }
  }
`

const RightBoxPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 100%;
  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color:#707070;
  }
  @media (max-width: 800px) {
  align-items: center;
  margin-left: 0px;
  }
`;

const FormPost = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-top: 12px;
    >button{
        width: 112px;
        height: 31px;
        background: #1877F2;
        border-radius: 5px;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        border:none;
    }
`
const BigInput = styled.input`
        padding: 23px;
        border: none;
        border-radius: 5px;
        width: 100%;
        background-color: #EFEFEF;
        height: 66px;
        display:flex;
        flex-wrap: wrap;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #666666;
        margin-bottom: 5px;
        &::placeholder{
            position: absolute;
            top: 15px; 
            left: 20px;
        }
`
const NormalInput = styled.input`
        padding: 0 23px;
        border: none;
        border-radius: 5px;
        width: 100%;
        background-color: #EFEFEF;
        height: 30px;
        margin-bottom: 5px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #666666;
`


const ImgProfile = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`

const TagsDiv = styled.div`
   margin-top: 215px;
`

const P1 = styled.div`
   
`

const P2 = styled.div`
@media (max-width: 800px) {
  visibility: none;
  }
`

