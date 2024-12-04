// // Admin_Service.js
// import React, { useState, useEffect } from 'react';
// import './Css/Admin_Services.css';
// import { useServices } from './Componets/ServicesContext';
// import Header from './Componets/Admin_Header';
// import Footer from './Componets/Footer';
// import Card from 'react-bootstrap/Card';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Alert from 'react-bootstrap/Alert';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


// const Admin_Service = () => {
//   const [serviceName, setServiceName] = useState('');
//   const [serviceDescription, setServiceDescription] = useState('');
//   const [doctorName, setDoctorName] = useState('');
//   const [editingServiceId, setEditingServiceId] = useState(null);
//   const [showAlert, setShowAlert] = useState(false);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const { services, addService, editService, deleteService } = useServices(); // Use useServices hook

//   useEffect(() => {
//     if (showSuccessAlert) {
//       const timer = setTimeout(() => {
//         setShowSuccessAlert(false);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessAlert]);

//   const handleAddOrEditService = () => {
//     if (!serviceName || !serviceDescription || !doctorName) {
//       setShowAlert(true);
//       setTimeout(() => setShowAlert(false), 2000);
//       return;
//     }

//     if (editingServiceId) {
//       editService(editingServiceId, { serviceName, serviceDescription, doctorName });
//       setEditingServiceId(null);
//     } else {
//       addService({ serviceName, serviceDescription, doctorName });
//     }

//     setShowSuccessAlert(true);
//     setTimeout(() => setShowSuccessAlert(false), 2000);

//     setServiceName('');
//     setServiceDescription('');
//     setDoctorName('');
//   };

//   const handleEditService = (service) => {
//     setServiceName(service.serviceName);
//     setServiceDescription(service.serviceDescription);
//     setDoctorName(service.doctorName);
//     setEditingServiceId(service._id);
//   };

//   return (
//     <>
//       <Header />
//       <div className="page-wrapper">
//         <div className="container">
//           {showAlert && (
//             <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
//               <strong>Please fill in all fields before submitting!</strong>
//             </Alert>
//           )}
//           {showSuccessAlert && (
//             <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
//               <strong>Service added successfully!</strong>
//             </Alert>
//           )}
//           <div className="service-form-container">
//             <h2 className="page-title text-center mb-4">Manage Hospital Services</h2>
//             <form className="service-form">
//               <div className="mb-3">
//                 <label>Service Name:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={serviceName}
//                   onChange={(e) => setServiceName(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label>Service Description:</label>
//                 <textarea
//                   className="form-control"
//                   value={serviceDescription}
//                   onChange={(e) => setServiceDescription(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label>Doctor's Name:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={doctorName}
//                   onChange={(e) => setDoctorName(e.target.value)}
//                 />
//               </div>
//               <button type="button" onClick={handleAddOrEditService} className="btn btn-service-primary">
//                 <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
//                 {editingServiceId ? 'Update Service' : 'Add Service'}
//               </button>
//             </form>
//           </div>
//           <h3 className="mt-4">Existing Services</h3>
//           <div className="row mt-3">
//             {services.map((service) => (
//               <div className="col-md-4 mb-4" key={service._id}>
//                 <Card className="service-card shadow h-100 border-0 rounded">
//                   <Card.Header className="bg-success text-white text-center">
//                     <h5 className="mb-0">{service.serviceName}</h5>
//                   </Card.Header>
//                   <Card.Body >
//                     <p className="text-muted ">{service.serviceDescription}</p>
//                     <footer className="text-end text-secondary">
//                       <small><strong>Doctor:</strong> {service.doctorName}</small>
//                     </footer>
//                   </Card.Body>
//                   <Card.Footer className="bg-light border-top-0">
//                     <Dropdown className="w-100">
//                       <Dropdown.Toggle
//                         variant="success"
//                         className="w-100"
//                         id={`dropdownMenuButton-${service._id}`}
//                         style={{color:'black',backgroundColor:' #218838'}}
//                       >
//                         Manage
//                       </Dropdown.Toggle>
//                       <Dropdown.Menu className="text-center">
//                         <Dropdown.Item
//                           onClick={() => handleEditService(service)}
//                           className="text-primary"
//                         >
//                           <FaEdit className="me-2" /> Edit
//                         </Dropdown.Item>
//                         <Dropdown.Item
//                           onClick={() => deleteService(service._id)}
//                           className="text-danger"
//                         >
//                           <FaTrash className="me-2" /> Delete
//                         </Dropdown.Item>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                   </Card.Footer>
//                 </Card>

//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Admin_Service;


/* New Code */
import React, { useState } from 'react';
import './Css/Admin_Services.css';
import Header from './Componets/Admin_Header';
import Footer from './Componets/Footer';
import { useServices } from './Componets/ServicesContext';
import { Button, Card, Form, Row, Col, Dropdown } from 'react-bootstrap';
import { FaEdit, FaTrash} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

const Admin_Service = () => {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [editingServiceId, setEditingServiceId] = useState(null);

  const { services, addService, editService, deleteService } = useServices();

  const handleAddOrEditService = () => {
    if (!serviceName || !serviceDescription || !doctorName) return;

    if (editingServiceId) {
      editService(editingServiceId, { serviceName, serviceDescription, doctorName });
      setEditingServiceId(null);
    } else {
      addService({ serviceName, serviceDescription, doctorName });
    }

    setServiceName('');
    setServiceDescription('');
    setDoctorName('');
  };

  const handleEditService = (service) => {
    setServiceName(service.serviceName);
    setServiceDescription(service.serviceDescription);
    setDoctorName(service.doctorName);
    setEditingServiceId(service._id);
  };

  const handleDeleteService = (id) => {
    deleteService(id);
  };

  return (
    <>
      <Header />
      <div className="page-wrapper">
      <h2 className="admin-service-txt-center">Manage Hospital Services</h2>
        <div className="container">
          {/* Add Service Section */}
          <div className="add-service-section py-4 px-3 mb-5 bg-light border rounded">
            {/* <Button variant="success" className="mb-4">
              <FaPlus className="me-2" /> Add Service
            </Button> */}
            <Form className='p-2'>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="serviceName">
                    <Form.Label  className='bold'>Service Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter service name"
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="serviceDescription">
                    <Form.Label className='bold'>Service Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter service description"
                      value={serviceDescription}
                      onChange={(e) => setServiceDescription(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="doctorName">
                    <Form.Label className='bold'>Doctor's Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter doctor's name"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <Button
                variant="primary"
                className="w-100"
                onClick={handleAddOrEditService}
              >
                {editingServiceId ? 'Update Service' : 'Add Service'}
              </Button> */}
              <Button
                variant="primary"
                className="w-100"
                onClick={handleAddOrEditService}
              >
                {editingServiceId ? (
                  <>
                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Update Service
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPlusCircle} className="me-2" /> Add Service
                  </>
                )}
              </Button>
            </Form>
          </div>

          {/* Existing Services Section */}
          <h3 className="text-center mb-4">Existing Services</h3>
          {/* <Row className="g-4">
            {services.map((service) => (
              <Col md={12} key={service._id}>
                <Card className="h-100 service-card">
                  <Card.Body>
                    <Row>
                      <Col>
                        <p>
                          <strong>Service Name:</strong> {service.serviceName}
                        </p>
                        <p>
                          <strong>Service Description:</strong>{' '}
                          {service.serviceDescription}
                        </p>
                        <p>
                          <strong>Doctor's Name:</strong> {service.doctorName}
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <Dropdown className="w-100">
                      <Dropdown.Toggle variant="success" className="w-100">
                        Manage
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleEditService(service)}>
                          <FaEdit className="me-2" /> Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDeleteService(service._id)}
                          className="text-danger"
                        >
                          <FaTrash className="me-2" /> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row> */}
          <Row className="g-4">
            {services.map((service) => (
              <Col md={6} lg={4} key={service._id}>
                <Card className="admin-service-card shadow-sm">
                  <Card.Body>
                    <div className="service-details">
                      <h5 className="service-title">{service.serviceName}</h5>
                      <p className="service-description">
                        <strong>Description:</strong> {service.serviceDescription}
                      </p>
                      <p className="doctor-name">
                        <strong>Doctor:</strong> {service.doctorName}
                      </p>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center">
                    <Dropdown drop='end'>
                      <Dropdown.Toggle variant="outline-success" className="dropdown-btn">
                        Manage
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="end" style={{backgroundColor:'#5C636A'}}>
                        <Dropdown.Item onClick={() => handleEditService(service)}>
                          <FaEdit className="me-2" /> Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDeleteService(service._id)}
                          className="text-danger"
                        >
                          <FaTrash className="me-2" /> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin_Service;
