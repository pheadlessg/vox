import React from 'react';
import { Link } from '@reach/router';
import { Container, Row, Col } from 'reactstrap';
import instagram from '../img/instagram.jpg';
import actorsaccess from '../img/actorsaccess.png';
import linkedin from '../img/linkedin.jpg';
import twitter from '../img/twitter.jpg';
import soundcloud from '../img/soundcloud.jpg';
import resume from '../docs/Sean_Fisher_Resume.pdf';

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link to="/" className="headertext">
              <h1>sean fisher.</h1>
              <h2>actor and voice talent.</h2>
            </Link>
          </Col>
          <Col>
            <div className="smlinks">
              <a
                className="smlink"
                href="https://www.linkedin.com/in/seankristianfisher/"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                className="smlink"
                href="https://resumes.actorsaccess.com/seanfisher"
              >
                <img src={actorsaccess} alt="ActorsAccess" />
              </a>
              <a
                className="smlink"
                href="https://soundcloud.com/sean-fisher-382995445"
              >
                <img src={soundcloud} alt="SoundCloud" />
              </a>
              <a className="smlink" href="https://www.instagram.com/sfvox/">
                <img src={instagram} alt="Instagram" />
              </a>
              <a className="smlink" href="https://twitter.com/seankfisher">
                <img src={twitter} alt="Twitter" />
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
            <a className="link" href={resume}>
              Download Resume
            </a>
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
