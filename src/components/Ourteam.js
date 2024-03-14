import Card from "react-bootstrap/Card";
import { SocialIcon } from "react-social-icons";

function Ourteam({ img, title, des }) {
  return (
    <>
      <Card style={{ width: "18rem", height: "30rem", padding: "25px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <center>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{des}</Card.Text>
          </center>
        </Card.Body>

        <Card.Body>
          <center>
            <Card.Link href="#">
              <SocialIcon network="twitter" fgColor="#4A0D66" bgColor="#ffff" />
            </Card.Link>

            <Card.Link href="#">
              <SocialIcon
                network="instagram"
                fgColor="#4A0D66"
                bgColor="#ffff"
              />
            </Card.Link>
          </center>
        </Card.Body>
      </Card>
    </>
  );
}

export default Ourteam;
