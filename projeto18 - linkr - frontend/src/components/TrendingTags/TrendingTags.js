import { Container,Header,TextH1,TextH2,Body,Content,DivLine } from "./style"
import { Link } from "react-router-dom"

const hashtags = ['java','javascript', 'python']

export default function TrendingTags(){
    return(
        <>
            <Container>
                <Header>
                    <TextH1>
                        trending
                    </TextH1>
                </Header>
                <DivLine/>
                <Body>
                    <Content>
                        <ul>
                            {hashtags.map((hashtag) => (
                                <li key={hashtag} >
                                    <Link to={`/hashtag/${hashtag}`} style={{textDecoration:'none'}}>
                                        <TextH2>
                                            # {hashtag}
                                        </TextH2>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Content>
                </Body>
            </Container>
        </>
    )
}
