import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Note() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          <strong>Notification</strong>
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">BloodHeroes</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>The next Blood Donation Camp in Howrah will be held on 22nd June 2025, starting at 10:00 AM. </Toast.Body>
        </Toast>
      </Col>
       <Col md={6} className="mb-2">
        <Button onClick={toggleShowB} className="mb-2">
           <strong>Notification</strong>
        </Button>
        <Toast onClose={toggleShowB} show={showB} animation={false}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">BloodHeroes</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body> Malda’s upcoming Blood Donation Camp is scheduled for 22nd June 2025 at 10:00 AM.</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Note;