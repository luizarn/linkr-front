import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Post from "../../components/timelinePosts/post";
import TrendingTags from "../../components/TrendingTags/TrendingTags";
import axios from "axios";
import { useState,useContext,useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function HashtagPage() {
  
  const { hashtag } = useParams();
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const promise = axios.get(`https://linkr-bzdl.onrender.com/hashtag/${hashtag}`, {
      headers:
        { Authorization: `Bearer ${token}` }
    })

    setIsLoading(true)

    promise.then(res => {
      setPosts(res.data)
      setIsLoading(false)
    })

    promise.catch(err => {
      alert("An error occured while trying to fetch the posts, please refresh the page")
      console.log(err.response.data)
    })

  }, []);

  useEffect(() => {
    const promise = axios.get(`https://linkr-bzdl.onrender.com/trending`, {
      headers:
        { Authorization: `Bearer ${token}` }
    })

    setIsLoading(true)

    promise.then(res => {
      console.log(res.data)
      setTags(res.data)
      setIsLoading(false)
    })

    promise.catch(err => {
      alert("An error occured while trying to fetch the posts, please refresh the page")
      console.log(err.response.data)
    })

  }, []);

    return (
        <>
            <Content>
                <Header/>
                <Container>
                  <P1>
                  <Title data-test="hashtag-title"># {hashtag}</Title>

                  <div>
              {isLoading ? (
                <BoxPost>Loading...</BoxPost>
              ) : (
                <>
                  {posts.length === 0 ? (

                    <BoxPost>There are no posts yet</BoxPost>

                  ) : (

                    posts.map((p) => (
                            <Post
                              name={p.user}
                              descriptionPost={p.descriptionPost}
                              title={p.urlPost.title}
                              description={p.urlPost.description}
                              url={p.urlPost.url}
                              image={p.urlPost.image}
                            />
                          ))
                        )}
                      </>
                    )}
                    </div>
                  </P1>
                  <P2>
                    <TagsDiv data-test="trending">
                      <TrendingTags tags={tags}/>
                    </TagsDiv>
                  </P2>
                </Container>
            </Content>

           
        </>

    );
}
const Content = styled.div`
  width: 100%;
  height: 100vh;
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
  gap: 20px;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;


const TagsDiv = styled.div`
   margin-top: 215px;
`

const P1 = styled.div`
  width: 611px;
  @media (max-width:800px){
    width: 100%;
  }
`

const P2 = styled.div`
  width: 301px;
  @media (max-width:800px){
    display: none;
  }
`

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