// Patient_Service.js
// import React from 'react';
// import './Css/Patient_Service.css';
// import Header from './Componets/Patientdashboard_Header';
// import Footer from './Componets/Footer';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserMd, faClipboardList } from '@fortawesome/free-solid-svg-icons';
// import { useServices } from './Componets/ServicesContext';

// const Patient_Service = () => {
//   const { services } = useServices(); // Use useServices hook

//   return (
//     <div className="patient-service-page">
//       <Header />
//       <div className="container my-5">
//         <h2 className="page-title text-center mb-4">Available Services</h2>
//         <div className="row">
//           {services.map((service, index) => (
//             <div className="col-md-4 mb-4" key={service._id}>
//               <Card className="service-card shadow-sm border-0 rounded h-100">
//                 <Card.Header className="bg-primary text-white text-center py-3">
//                   <FontAwesomeIcon icon={faClipboardList} className="me-2" />
//                   <span className="fw-bold">{service.serviceName}</span>
//                 </Card.Header>
//                 <Card.Body className="d-flex flex-column">
//                   <Card.Text className="text-muted mb-4">{service.serviceDescription}</Card.Text>
//                   <footer className="blockquote-footer text-end mt-auto">
//                     <FontAwesomeIcon icon={faUserMd} className="me-2 text-secondary" />
//                     <cite className="text-secondary">{service.doctorName}</cite>
//                   </footer>
//                 </Card.Body>
//                 <Card.Footer className="bg-light text-center py-3">
//                   <Button variant="primary" className="px-4" href="/patient_appointment">
//                     Book Appointment
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Patient_Service;


import React from 'react';
import './Css/Patient_Service.css';
import Header from './Componets/Patientdashboard_Header';
import Footer from './Componets/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { useServices } from './Componets/ServicesContext';

const Patient_Service = () => {
  const { services } = useServices();

  return (
    <>
      <Header />
      <h2 className="patient-service-txt-center">Our Exclusive Services</h2>
      <hr className="section-divider mx-auto" />
      <div className="patient-service-page">
        <div className="patient-service-container my-5">
          <div className="row">
            {services.map((service) => (
              <div className="col-md-6 col-lg-4 mb-4" key={service._id}>
                <Card className="service-card shadow h-100 border-0">
                  <div className="service-card-header text-white text-center py-3">
                    <FontAwesomeIcon icon={faClipboardList} className="service-icon mb-2" />
                    <h5 className="patient-service-title">{service.serviceName}</h5>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <p className="service-description">
                      <strong>Description:</strong> {service.serviceDescription}
                    </p>
                    <p className="service-doctor">
                      <strong>Doctor:</strong>{' '}
                      <FontAwesomeIcon icon={faUserMd} className="me-2" />
                      {service.doctorName}
                    </p>
                  </Card.Body>
                  <Card.Footer className="text-center py-3">
                    <Button variant="success" className="btn-book px-4" href="/patient_appointment">
                      Book Appointment
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Patient_Service;
