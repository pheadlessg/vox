import React from 'react';
import { Link } from '@reach/router';
import { Container, Row, Col } from 'reactstrap';
import instagram from '../css/img/instagram.jpg';
import linkedin from '../css/img/linkedin.jpg';
import twitter from '../css/img/twitter.jpg';
import soundcloud from '../css/img/soundcloud.jpg';

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link to="/" className="headertext">
              <h1>sean fisher.</h1>
              <h2>voice talent.</h2>
            </Link>
          </Col>
          <Col>
            <div className="smlinks">
              <a
                className="smlink"
                href="https://www.linkedin.com/in/seankristianfisher/"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                className="smlink"
                href="https://soundcloud.com/sean-fisher-382995445"
              >
                <img src={soundcloud} alt="soundcloud" />
              </a>
              <a
                className="smlink"
                href="https://www.instagram.com/pheadlessg/"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a className="smlink" href="https://twitter.com/pheadlessg">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="hr" />
        <Row>
          <Col>
            <Link to="/about/" className="link">
              About
            </Link>
          </Col>
          <Col>
            <Link to="/demos/" className="link">
              Demos
            </Link>
          </Col>
          <Col>
            <Link to="/contact/" className="link">
              Contact
            </Link>
          </Col>
        </Row>
        <hr className="hr" />
      </Container>
    </div>
  );
};

export default Header;
