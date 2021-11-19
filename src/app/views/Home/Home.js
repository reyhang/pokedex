import { Col, Container, Row } from "react-bootstrap";
import { usePokemon } from "../../redux/actions/ListActions";
import PokeCards from "../Cards/PokeCard";
import Header from "../layout/Header";

export default function Home({}){
    const {pokemons} = usePokemon()


    return(
        <Container fluid>
        <Header/>
 
         <Row> 
           {pokemons.data?.map(res =>
                 <Col xs={3}>
                 <PokeCards data={res}/>
                 </Col>)} 
         </Row>
         <img src="https://media.tenor.com/images/6e190eb7b580983ce09c7ccf0c91519d/tenor.gif" class="pikachu" alt="Pikachu" style={{width:'60px',height:'40px'}}></img>
         <img src="https://nguyenbryan54.github.io/Project1/gif/ash.gif.gif" class="ash" alt="Ash" style={{width:'140px',height:'140px'}}></img>
         </Container>
    )
}