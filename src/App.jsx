import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "./Img/Img1.jpg";

function App() {
  return (
    <>
      {/* header start */}
      <header>
        <Container className="mt-5">
          <Row>
            <Col md={4}>
              <h1>Logo</h1>
            </Col>
            <Col md={8} className="d-flex justify-content-end">
              <a href="/" className="linkss">
                <h5>Link 1</h5>
              </a>
            </Col>
          </Row>
        </Container>
      </header>
      {/* header end */}
      {/* body start */}
      <Container>
        <Row>
          <Col md={6}>
            <div className="random  mx-auto d-flex justify-content-center align-items-center h-100">
              <p className="w-50">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo, soluta atque modi quia, libero neque, autem unde ut
                esse impedit animi ducimus laboriosam? Laboriosam, minima!
                Recusandae non molestias ipsam repellat.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="random">
              <img src={img1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* body end */}
      {/* footer start */}
      <footer>
        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <div className="footer align-left ps-2">
                <h3>Thank you for joining us</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* footer end */}
    </>
  );
}

export default App;
