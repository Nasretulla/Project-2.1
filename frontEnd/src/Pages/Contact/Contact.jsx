import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: 0,
      body: "",
    },

    onSubmit: (values) => {
      console.log(values);
      fetch(`http://localhost:4000/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        console.log(res);
        if (res.ok) {
          swal({
            title: "Viesti lähetettiin",
            buttons: "OKEI",
            icon: "success",
          }).then((values) => navigate("/"));
        }
      });
    },
  });

  return (
    <>
      <Navbar />
      <div className="container-for-register">
        <div className="test">
          <div id="main-wrapper" className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <div className="row no-gutters">
                      <div className="col-lg-6">
                        <div className="p-5">
                          <p className="text-muted mt-2 mb-5">
                          Ottaa Yhteyttä{" "}
                          </p>

                          <form onSubmit={form.handleSubmit}>
                            <div className="form-group">
                              <label>Sukunimi</label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={form.name}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label>Sähkoposti</label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={form.email}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                              />

                              <label>Viesti</label>
                              <input
                                type="textarea"
                                className="form-control-textarea"
                                value={form.body}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                name="body"
                              />
                            </div>
                            <button type="submit" className="btn-form fs-4">
                            Lähetä
                            </button>
                          </form>
                        </div>
                      </div>

                      <div className="col-lg-6 d-none d-lg-inline-block">
                        <div className="rounded-right img-register">
                          <div className="overlay rounded-right"></div>
                          <div className="account-testimonial">
                            <h4 className="text-white mb-4">SANOTAAN MEIDÄN</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
