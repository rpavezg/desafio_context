import { useContext } from "react";
import { PersonajesContext } from "../context/PersonajesContext";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Favorites = () => {
  const { Personajes, setPersonajes } = useContext(PersonajesContext);

  const quitarFavoritos = (id) => {
    const newPersonaje = Personajes.map((personaje)=>{
        if(personaje.id === id){
            return {
                ...personaje, 
                liked: !personaje.like
            }
        }
        return personaje;
    });

    setPersonajes(newPersonaje);
}

    return (
      <div className="App" >
        <h1>Natural Pic</h1>
        <Row xs={1} md={4} className="g-3 p-4">
        {Personajes.filter((personaje)=> personaje.like).map((personaje) => (
          <Col>
            <Card onClick={()=> quitarFavoritos(personaje.id)}>
            <Card.Img variant="bottom" src={personaje.src.original} height="200px" />
              <Card.ImgOverlay>
              <Card.Title className="text-end text-capitalize text-white text-shadow-sm">{personaje.photographer}</Card.Title >
              <Card.Text className="text-end text-capitalize text-white">Casa {personaje.alt}</Card.Text>

              </Card.ImgOverlay>       
            </Card>
          </Col>
        ))}
      </Row>
      </div>
      );
    };
  export default Favorites;
  