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
                liked: !personaje.liked
            }
        }
        return personaje;
    });

    setPersonajes(newPersonaje);
}

    return (
      <div className="App" >
        <h1>Personajes Favoritos</h1>
        <Row xs={1} md={4} className="g-3 p-4">
        {Personajes.filter((personaje)=> personaje.liked).map((personaje) => (
          <Col>
            <Card onClick={()=> quitarFavoritos(personaje.id)}>
              <Card.Img className="object-fit-scale-down align-top" variant="top" src={personaje.image} alt={personaje.name} height="200px" />
              <Card.ImgOverlay>
                <Card.Title className="text-left text-white">{personaje.name}</Card.Title >
                <Card.Text className="text-white">Casa {personaje.house}</Card.Text>

              </Card.ImgOverlay>       
            </Card>
          </Col>
        ))}
      </Row>
      </div>
      );
    };
  export default Favorites;
  