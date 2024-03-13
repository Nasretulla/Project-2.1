import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";
import AuthContext from "../../context/authContext";

import "./Register.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const authContext = useContext(AuthContext);
  const navigaite = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "Pakollinen";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }
    return errors;
  };

  const form = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: 0,
    },
    validate,
    onSubmit: (values) => {
      fetch(`https://project-2-1-seg8.onrender.com/v1/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 409) {
            swal({
              title: "UUDESTAN",
              icon: "warning",
              buttons: "OK",
            });
          } else {
            console.log("khata");
          }
        })
        .then((result) => {
          form.name = "";
          console.log(result);
          authContext.login(result.user, result.accessToken);
          navigaite("/");
        });
    },
  });

  return (
    <>
      <Navbar />
      <div className="container container-register">
        <div className="test">
          <div id="main-wrapper" className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="p-5">
                          <p className="text-muted mt-2 mb-5">
                            Welcom to our page
                          </p>
                          <form onSubmit={form.handleSubmit}>
                            <div className="form-group">
                              <label for="exampleInputEmail1">Sukunimi</label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.name}
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label for="exampleInputPassword1">Etunimi</label>
                              <input
                                type="username"
                                className="form-control"
                                name="username"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.username}
                              />
                              <label for="exampleInputPassword1">
                                Sähkoposti
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.email}
                              />
                              <label for="exampleInputPassword1">
                                Salasana
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.password}
                              />
                              {form.errors.password && form.touched.password ? (
                                <div className="validat-register">
                                  {form.errors.password}
                                </div>
                              ) : null}
                              <label for="exampleInputPassword1">
                                Vahvista salasana
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.confirmPassword}
                              />
                            </div>
                            <button type="submit" className="btn-form fs-3">
                              JATKA
                            </button>
                          </form>
                        </div>
                      </div>

                      <div className="col-lg-6 d-none d-lg-inline-block">
                        <div className="rounded-right img-register">
                          <div className="overlay rounded-right"></div>
                          <div className="account-testimonial">
                            {/* <h4 className="text-white mb-4">
                              This beautiful theme yours!
                            </h4> */}
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
