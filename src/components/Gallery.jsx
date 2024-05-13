import { useContext } from "react";
import { PersonajesContext } from "../context/PersonajesContext";
import Card from 'react-bootstrap/Card';
import IconHeart from './IconHeart';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Gallery = () => {
    const { Personajes, setPersonajes } = useContext(PersonajesContext);

    const agregarFavoritos = (id) => {
        const newPersonaje = Personajes.map((personaje)=>{
            if(personaje.id === id){
                return {
                    ...personaje, 
                    like: !personaje.like
                }
            }
            return personaje;
        });

        setPersonajes(newPersonaje);
    }

    return (
        <Row xs={1} md={4} className="g-3 p-4">
    {Personajes.map((personaje, i) => (
          <Col key={i}>
            <Card onClick={()=> agregarFavoritos(personaje.id)}>
              <Card.Img className="object-fit-scale-down align-top" variant="top" src={personaje.url} height="200px" />
              <Card.ImgOverlay>
                <Card.Title className="text-left text-white">{personaje.photographer}</Card.Title >
                <Card.Text className="text-white">Casa {personaje.alt}</Card.Text>
                <IconHeart filled={personaje.like}/>
              </Card.ImgOverlay>
              
            </Card>
          </Col>
        ))}
      </Row>
    
    );
  };
  export default Gallery;
  