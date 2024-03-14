import Card from "react-bootstrap/Card";

function Cards({ c, title, des }) {
  return (
    <>
      <div>
        <Card>
          <Card.Img variant="top" src={c} />
          <center>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{des}</Card.Text>
            </Card.Body>
          </center>
        </Card>
      </div>
    </>
  );
}

export default Cards;
