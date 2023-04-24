import { React } from "react";
import "./head.css";
import me from "../pic/me.jpeg";
import { MDBCol } from "mdb-react-ui-kit";
const Header = () => {
  return (
    <header className="text-center text-lg-start text-white color">
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <MDBCol className="mb-4">
              <img
                alt=""
                src={me}
                width="250"
                height="200"
                className=" mx-auto d-block align-top rounded-circle"
                rounded
              />
            </MDBCol>
            <div className="text-center " style={{ marginTop: "-20px" }}>
              <h1>CHAYMAA SOUHAIB</h1>
              <h2>Etudiante 4eme annee</h2>
            </div>
          </div>
        </section>
        <br />
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mx-auto ">
          <li class="nav-item">
            <a class="nav-link link-danger" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-danger" href="/p">
              Project
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-danger" href="/c">
              Certificates
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-danger" href="/e">
              Experiences
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-danger" href="/t">
              Formations
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-danger" href="/co">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
