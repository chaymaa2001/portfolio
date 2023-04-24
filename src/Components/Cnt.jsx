import { React } from "react";

const Contact = () => {
  return (
    <div class="container mt-4">
      <section class="mb-4">
        <h2
          class="h1-responsive font-weight-bold text-center my-4 "
          style={{ color: "#fa00fe" }}
        >
          Contact me
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact me
          directly. I will come back to you within a matter of hours to Answer
          you.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="name" class="">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email" class="">
                      Your email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <label for="message">Your message</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left" style={{ marginTop: "20px" }}>
              <a
                class="btn btn-danger"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0" style={{ marginTop: "60px" }}>
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Maison Chaymaa , Asfi</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+212656361375</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>CHAIMAASOUHAIB2019@GMAIL.COM</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export { Contact };
