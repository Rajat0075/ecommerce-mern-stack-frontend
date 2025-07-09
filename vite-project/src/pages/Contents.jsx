import { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function Contents() {
  // const [content, setContent] = useState([]);
  // useEffect(() => {
  //   fetch('/api/content').then((respone) => respone.json()).then((data) => setContent(data));
  // }, []);

  //const ContentAPI = content.map(content => (<p key={content.id}>{content.para}</p>))

  const category = [
    { id: 1, name: 'Electronic', instructor: 'Sandeep Jain' },
    { id: 2, name: 'Beauty, Food, Toys & more', instructor: 'Sandeep Jain' },
    { id: 3, name: 'Fashion', instructor: 'Sandeep Jain' },
    { id: 4, name: 'Home & Furniture', instructor: 'Sandeep Jain' },
    { id: 5, name: 'Sport & Yoga', instructor: 'Sandeep Jain' },
  ];

  const renderCourses = () => {
    return category.map(category => (
      <Col key={category.id} md={4} className="mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
            <p className="card-text">Instructor: {category.instructor}</p>
            <Button variant="primary">Click</Button>
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <>
      <div>
        <Container>
          <h1 className="mt-4 mb-4">Shopping</h1>
          <Row>{renderCourses()}</Row>
        </Container>
       {/* <p>{ContentAPI}</p> */}
      
      </div>
      <Footer />
    </>

  )
}
