import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Post from "../../components/timelinePosts/post";
import TrendingTags from "../../components/TrendingTags/TrendingTags";
import axios from "axios";
import { useEffect } from "react";


export default function hashtagPage() {
  
  const { hashtag } = useParams();

  const [posts, setPosts] = useState([]);
  const [arrayTags, setArrayTags] = useState();
    
    useEffect(() => {
      const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`, {
        headers:
          { Authorization: `Bearer ${token}` }
      })

      promise.then(res => {
        setPosts(res.data)
        setArrayTags(res.data.arrayTags)
      })
  
      promise.catch(err => console.log(err.response.data))
  
    }, []);

    return (
        <>
            <Content>
                <Header/>
                <Container>
                  <P1>
                  <Title># {hashtag}</Title>

                  <div>
                {posts.map((p) => (
                    <Post
                    name= {p.user}
                    descriptionPost = {p.descriptionPost}
                    title= {p.urlPost.title}
                    description = {p.urlPost.description}
                    url = {p.urlPost.url}
                    image= {p.urlPost.image}
                    />
                ))}
                
                </div>
                   </P1>
                   <P2>
                     <TagsDiv>
                       <TrendingTags arrayTags={arrayTags}/>
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

