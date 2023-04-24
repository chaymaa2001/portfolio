import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Training = () => {
  return (
    <Row
      className="row-cols-3 row-cols-md-3 g-3"
      style={{ marginBottom: "20px" }}
    >
      <Card style={{ width: "20rem", marginLeft: "30px" }}>
        <Card.Header>BACCALAUREAT </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item> JUIN 2019 </ListGroup.Item>
          <ListGroup.Item>
            SIENCE PHYSIQUE ,Mathematiques , Science
          </ListGroup.Item>
          <ListGroup.Item>Mention :très bien</ListGroup.Item>
          <ListGroup.Item>Etablissement : Elhamra</ListGroup.Item>
        </ListGroup>
      </Card>

      <Card style={{ width: "20rem", marginLeft: "30px" }}>
        <Card.Header>DUT GENIE INFORMATIQUE </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item> Juin 2021 </ListGroup.Item>
          <ListGroup.Item>
            Algorithme probablité langage c, c++,java
          </ListGroup.Item>
          <ListGroup.Item> Mention : assez bien </ListGroup.Item>
          <ListGroup.Item>Etablissement : Est</ListGroup.Item>
        </ListGroup>
      </Card>

      <Card style={{ width: "20rem", marginLeft: "30px" }}>
        <Card.Header>LICENCE INFORMATIQUE</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Juin 2022</ListGroup.Item>
          <ListGroup.Item>
            administration linux base de données réseau et programmation java
          </ListGroup.Item>
          <ListGroup.Item>Mention : Bien </ListGroup.Item>
          <ListGroup.Item>Etablissement : UPM</ListGroup.Item>
        </ListGroup>
      </Card>
    </Row>
  );
};

export { Training };
