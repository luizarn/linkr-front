import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Header from "../../components/header/Header";
import Post from "../../components/timelinePosts/post";
import TrendingTags from "../../components/TrendingTags/TrendingTags";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Content, TagsDiv, P1, P2, Title, Follow,FollowButton,UnfollowButton, BoxPost, ImgProfile} from "./style";

export default function TimelinePage() {
    

    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [postCounter, setPostCounter] = useState(0);
    const [tags, setTags] = useState([]);
    const [follow,setFollow] = useState(false);

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
        })
        promise.catch(err => console.log(err.response.data))
      }, [postCounter]);
      
      useEffect(() => {
        const promise = axios.get(`https://linkr-bzdl.onrender.com/trending`, {
          headers:
            { Authorization: `Bearer ${token}` }
        })
    
        setIsLoading(true)
    
        promise.then(res => {
          setTags(res.data)
          setIsLoading(false)
        })
    
        promise.catch(err => {
          alert("An error occured while trying to fetch the posts, please refresh the page")
          console.log(err.response.data)
        })
    
      }, []);

      useEffect(() => {
        const promise = axios.get(`https://linkr-bzdl.onrender.com/user/${id}/follow`, {
          headers:
            { Authorization: `Bearer ${token}` }
        })

        promise.then(res => {
          setFollow(res.data)
        })
    
        promise.catch(err => {
          alert("An error occured while trying to get the following status, please refresh the page")
          console.log(err.response.data)
        })

      },[follow])

      async function followSwitch(e){
        e.preventDefault();
        const promise = axios.post(`https://linkr-bzdl.onrender.com/user/${id}/follow`, {
          headers:
          { Authorization: `Bearer ${token}` }
        })
        
        promise.then(res => {
          alert(res.data)
          setFollow(true);
        })
        
        promise.catch(err => {
          alert("An error occurred when trying to follow/unfollow this user, please try again")
          console.log(err.response.data)
        })
      }

      async function unfollowSwitch(e){
        e.preventDefault();
        const promise = axios.delete(`https://linkr-bzdl.onrender.com/user/${id}/follow`, {
          headers:
            { Authorization: `Bearer ${token}` }
        })

        promise.then(res => {
          alert(res.data)
          setFollow(false)
        })
    
        promise.catch(err => {
          alert("An error occurred when trying to follow/unfollow this user, please try again")
          console.log(err.response.data)
        })
      }

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
                        // likes={p.postLike.likes}
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
            <Follow>
                {follow ? (
                  <UnfollowButton onClick={unfollowSwitch}>Unfollow</UnfollowButton>
                  ) : (
                    <FollowButton onClick={followSwitch}>Follow</FollowButton>
                  )
                  
                }
            </Follow>
            <TagsDiv>
              <TrendingTags tags={tags}/>
            </TagsDiv>
          </P2>
        </Container>
      </Content>
    </>
  );
}
