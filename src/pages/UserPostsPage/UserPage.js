import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Header from "../../components/header/Header";
import Post from "../../components/timelinePosts/post";
import TrendingTags from "../../components/TrendingTags/TrendingTags";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Content, TagsDiv, P1, P2, Title, BoxPost, ImgProfile} from "./style";

export default function TimelinePage() {
    

    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([])
    const [postCounter, setPostCounter] = useState(0);
    const [arrayTags, setArrayTags] = useState()

    const { id }  = useParams();

    async function getUserInfo() {
        await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`)
          .then((response) => {
            setUser({ ...response.data })
          })
          .catch((error) => {
            console.log(error.response.data);
          })
      }

    useEffect(() => {
        getUserInfo();
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/home/`, {
          headers:
            { Authorization: `Bearer ${token}` }
        })

        promise.then(res => {
          console.log(res.data)
          setPosts(res.data)
          setArrayTags(res.data.arrayTags)
        })
        promise.catch(err => console.log(err.response.data))
      }, [postCounter]);
  
  return (
    <>
      <Content>
        <Header />
        <Container>
          <P1>
            <Title>{user.username}'s posts</Title>

            <div>
              {posts.map((p) => (
                      <Post
                        name={p.user}
                        descriptionPost={p.descriptionPost}
                        title={p.urlPost.title}
                        description={p.urlPost.description}
                        url={p.urlPost.url}
                        image={p.urlPost.image}
                      />
                    ))}
            </div>
          </P1>
          <P2>
            <TagsDiv>
              <TrendingTags />
            </TagsDiv>
          </P2>
        </Container>
      </Content>
    </>
  );
}
