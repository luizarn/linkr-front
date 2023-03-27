import { Container,Header,TextH1,TextH2,Body,Content,DivLine } from "./style"
import { Link } from "react-router-dom"

export default function TrendingTags({tags}){

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
                            {tags.map((hashtag) => (
                                <li key={hashtag.name} >
                                    <Link to={`/hashtag/${hashtag.name}`} style={{textDecoration:'none'}}>
                                        <TextH2 data-test="hashtag">
                                            # {hashtag.name}
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
