import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Column from "./Column";
import one from "../Images/three_parts-1.png";
import two from "../Images/three_parts-2.png";
import three from "../Images/three_parts-3.png";
import supply_lines1 from "../Images/supply_lines-1.png";
import supply_lines2 from "../Images/supply_lines-2.png";
import leftight from "../Images/left-right.jpeg";
import one1 from "../Images/neuron_forest1.png";
import two2 from "../Images/neuron_forest2.png";
import three3 from "../Images/neuron_forest3.png";
import cell_signalling1 from "../Images/cell_signalling1.png";
import cell_signalling2 from "../Images/cell_signalling2.png";
import cell_signalling3 from "../Images/cell_signalling3.png";
function Brain() {
  return (
    <div>
      <div style={{ background: "#009A75" }}>
        <center>
          <h1 style={{ padding: "25px" }}>THREE PARTS :</h1>
        </center>
      </div>
      <center>
        <p
          style={{
            textAlign: "center",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "25px",
            fontSize: "1.4rem",
            width: "45rem",
          }}
        >
          Your brain is your most powerful organ, yet weighs only about three
          pounds. It has a texture similar to firm jelly.
        </p>
      </center>
      <h3
        style={{
          textAlign: "center",
          color: "#4A0D66",
          paddingBottom: "25px",
          fontSize: "2rem",
        }}
      >
        {" "}
        Brain has three main parts :
      </h3>
      <Container>
        <Row>
          <Col>
            <Column
              img={one}
              title="(a) Cerebrum"
              des="The Cerebrum is the largest part of the brain. It initiates and coordinates movement and regulates temperature, speech, judgment, thinking and reasoning, problem-solving, emotions and learning. "
            />
          </Col>

          <Col>
            {" "}
            <Column
              img={two}
              title="(b) Cerebellum"
              des="The Cerebellum sits at the back of your head, under the cerebrum. It controls coordination and balance."
            />
          </Col>
          <Col>
            {" "}
            <Column
              img={three}
              title="(c) Brain stem"
              des="The brainstem is the structure that connects the cerebrum of the brain to the spinal cord and cerebellum. It controls automatic functions such as breathing, digestion, heart rate and blood pressure."
            />
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#4A0D66", marginTop: "25px" }}>
        <center>
          <h1 style={{ padding: "25px", color: "white" }}>SUPPLY LINES :</h1>
        </center>
      </div>
      <p style={{ textAlign: "center", padding: "40px", fontSize: "1.4rem" }}>
        Brain is nourished by one of your body's richest networks of blood
        vessels.{" "}
        <p>
          When we are thinking hard, your brain may use up to 50 percent of the
          fuel and oxygen.
        </p>
      </p>
      <Container>
        <Row>
          <Col>
            {" "}
            <Column
              img={supply_lines1}
              des="Brain is nourished by one of your body's richest networks of blood vessels. When you are thinking hard, your brain may use up to 50 percent of the fuel and oxygen."
            />
          </Col>

          <Col>
            {" "}
            <Column
              img={supply_lines2}
              des="The whole vessel network includes veins and capillaries in addition to arteries."
            />
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#009A75" }}>
        <center>
          <h1 style={{ padding: "25px", color: "white" }}>
            LEFT BRAIN/ RIGHT BRAIN :
          </h1>
        </center>
      </div>
      <p style={{ textAlign: "center", padding: "45px", fontSize: "1.4rem" }}>
        Human brain is divided into right and left halves. Experts are not
        certain how the "left brain" and "right brain" may differ in function.
        In most people, the language area is chiefly on the left.
      </p>
      <Container>
        <center>
          {" "}
          <img className="img-fluid" src={leftight} alt="left_right_brain" />
        </center>
      </Container>
      <div style={{ background: "#4A0D66" }}>
        <center>
          <h1 style={{ padding: "25px", color: "white", marginTop: "50px" }}>
            NEURON FOREST :
          </h1>
        </center>
      </div>
      <p style={{ textAlign: "center", padding: "25px", fontSize: "1.4rem" }}>
        Neurons are the chief type of cell destroyed by brain disease. Neurons
        are born in areas of the brain that are rich in concentrations of neural
        precursor cells (also called neural stem cells). Neurons or nerve cells
        are the core components of the brain.
      </p>
      <Container>
        <Row>
          <Col>
            <Column
              img={one1}
              des="An adult brain contains about 100 billion nerve cells.
            "
            />
          </Col>
          <Col>
            {" "}
            <Column
              img={two2}
              des="Branches connect the nerve cells at more than 100 trillion points. Scientists call this dense, branching network a neuron forest. 
            "
            />
          </Col>
          <Col>
            {" "}
            <Column
              img={three3}
              des="Signals traveling through the neuron forest form the basis of memories, thoughts, and feelings.
            "
            />
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#009A75", marginTop: "37px" }}>
        <center>
          <h1 style={{ padding: "25px", color: "white" }}>CELL SIGNALING :</h1>
        </center>
      </div>
      <h3
        style={{
          textAlign: "center",
          color: "#4A0D66",
          padding: "33px",
          fontSize: "1.4rem",
        }}
      >
        “Cell Signaling is the process by which cells communicate with other
        cells within their body or with the external environment.”
      </h3>
      <center>
        <p
          style={{
          
            width: "60rem",
            fontSize: "1.4rem",
            marginBottom: "25px",
            textAlign: "justify",
          }}
        >
          Cell signaling occurs by several distinct pathways. Multicellular
          organisms need cell signaling to regulate different functions. Cell
          signaling can be intercellular as well as intracellular. Intracellular
          signals are produced by the same cells that receive the signal.
          Intercellular signals travel throughout the body. This permits
          specific glands to produce signals that act on different tissues.
          There are 5 different types of cell signaling and also there are
          various stages of cell signaling too.
        </p>
      </center>
      <Container>
        <Row>
          <Col>
            <Column
              img={cell_signalling1}
              des="Signals that form memories and thoughts move through an individual nerve cell as a tiny electrical charge.

            "
            />
          </Col>
          <Col>
            {" "}
            <Column
              img={cell_signalling2}
              des="Nerve cells connect to one another at synapses.
 
            "
            />
          </Col>
          <Col>
            {" "}
            <Column
              img={cell_signalling3}
              des="When a charge reaches a synapse, it may trigger release of tiny bursts of chemicals called neurotransmitters.

            "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Brain;
