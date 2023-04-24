import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardFooter,
  MDBCol,
} from "mdb-react-ui-kit";
import cert from "../pic/certif.webp";

const Certificates = () => {
  return (
    <MDBRow className="row-cols-1 row-cols-md-4 g-4">
      <MDBCol>
        <MDBCard>
          <MDBCardImage src={cert} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardTitle>
              <center>IBM</center>
            </MDBCardTitle>
            <MDBCardText>
              Spécialisation DevOps, Cloud, and Agile Foundations
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className="text-muted  ">
              <h6 className="text-center">2022 - 2023</h6>
            </small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src={cert} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardTitle>
              <center>IBM</center>
            </MDBCardTitle>
            <MDBCardText>
              Spécialisation DevOps, Cloud, and Agile Foundations
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className="text-muted  ">
              <h6 className="text-center">2022 - 2023</h6>
            </small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
export { Certificates };
