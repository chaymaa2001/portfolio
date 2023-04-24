import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../index.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBContainer,
} from "mdb-react-ui-kit";

const Project = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MDBRow className="row-cols-1 row-cols-md-5 g-2">
      <MDBCol>
        <MDBCard>
          <CCard style={{ width: "18rem" }}>
            <CCardBody>
              <CCardTitle>First Project</CCardTitle>
              <CCardText>Localisation </CCardText>
              <CButton style={{ background: "#ca1bcd" }} onClick={handleShow}>
                See More...
              </CButton>

              <>
                <Modal show={show} onHide={handleClose} keyboard={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>First Project</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <MDBContainer className="py-5 h-200">
                      <MDBRow className="justify-content-center align-items-center h-300">
                        <MDBCol lg="12" className="mb-4 mb-lg-0">
                          <MDBCard
                            className="mb-4"
                            style={{ borderRadius: ".5rem" }}
                          >
                            <MDBRow className="g-2">
                              <MDBCol md="8">
                                <MDBCardBody className="p-10">
                                  <MDBTypography tag="h6">
                                    Information:
                                  </MDBTypography>
                                  <hr className="mt-0 mb-8" />
                                  <MDBRow className="pt-12">
                                    <MDBCol size="6" className="mb-3">
                                      <MDBTypography tag="h6">
                                        {" "}
                                        Lieu
                                      </MDBTypography>
                                      <MDBCardText className="text-muted">
                                        Asfi
                                      </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="6" className="mb-3">
                                      <MDBTypography tag="h6">
                                        objectif
                                      </MDBTypography>
                                      <MDBCardText className="text-muted">
                                        Fixer la localisation
                                      </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="8" className="mb-3">
                                      <MDBTypography tag="h6">
                                        Position
                                      </MDBTypography>
                                      <MDBCardText className="text-muted">
                                        Developeuse
                                      </MDBCardText>
                                    </MDBCol>
                                  </MDBRow>

                                  <MDBTypography tag="h6">
                                    other Informatons
                                  </MDBTypography>
                                  <hr className="mt-0 mb-4" />
                                  <MDBRow className="pt-2">
                                    <MDBCol size="12" className="mb-4">
                                      <MDBTypography tag="h6">
                                        Begin Date:
                                      </MDBTypography>
                                      <MDBCardText className="text-muted">
                                        15 June 2022
                                      </MDBCardText>
                                    </MDBCol>
                                    <MDBCol size="6" className="mb-3">
                                      <MDBTypography tag="h6">
                                        Finale Date:
                                      </MDBTypography>
                                      <MDBCardText className="text-muted">
                                        30 August 2022
                                      </MDBCardText>
                                    </MDBCol>
                                  </MDBRow>
                                </MDBCardBody>
                              </MDBCol>
                            </MDBRow>
                          </MDBCard>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </CCardBody>
          </CCard>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
export { Project };
