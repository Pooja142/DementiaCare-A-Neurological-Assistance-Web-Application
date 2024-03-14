import Card from "react-bootstrap/Card";

function Column({ img, title, des }) {
  return (
    <center>
      <Card style={{ width: "22rem", border: "none", padding: "25px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              fontSize: "1.4rem",
              color: "#009A75",
              padding: "10px",
            }}
          >
            <h3>{title}</h3>
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "1.4rem" }}>
            {des}
          </Card.Text>
        </Card.Body>
      </Card>
    </center>
  );
}

export default Column;
