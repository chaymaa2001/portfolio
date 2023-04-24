import { React } from "react";
import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react";

import "../index.css";

import { MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Ex = () => {
  return (
    <MDBRow className="row-cols-1 row-cols-md-4 g-2">
      <MDBCol>
        <MDBCard>
          <CCard style={{ width: "35rem" }}>
            <CCardBody>
              <CCardTitle>
                {" "}
                SOCIETE MARSA MAROC• DATES DE 15 AVRIL 2021 À 22 MAI 2021
              </CCardTitle>
              <CCardText>
                Etablir un réseau et des sous _réseau des différents bâtiments
                de la société en utilisant les téchnique de sécurité
              </CCardText>
            </CCardBody>
          </CCard>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
export { Ex };
