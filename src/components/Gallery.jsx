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
              <Card.Img variant="bottom" src={personaje.src.original} height="200px" />
              <Card.ImgOverlay>
                <IconHeart filled={personaje.like}/>
                <Card.Title className="text-end text-capitalize text-white text-shadow-sm">{personaje.photographer}</Card.Title >
                <Card.Text className="text-end text-capitalize text-white">Casa {personaje.alt}</Card.Text>
                
              </Card.ImgOverlay>
              
            </Card>
          </Col>
        ))}
      </Row>
    
    );
  };
  export default Gallery;
  