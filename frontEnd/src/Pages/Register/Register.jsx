import React from "react";
import { Link, json } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";


import "./Register.css";

export default function Register() {
  const form = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: 0,
    },
    onSubmit: (values) => {
      fetch(`http://localhost:4000/v1/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.ok) {
          console.log(res);
        }
      });
    },
  });

  return (
    <>
      <Navbar />
      <div className="container container-register">
        <div className="test">
          <div id="main-wrapper" class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10">
                <div class="card border-0">
                  <div class="card-body p-0">
                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <div class="p-5">
                          <p class="text-muted mt-2 mb-5">Welcom to our page</p>
                          <form onSubmit={form.handleSubmit}>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Sukunimi</label>
                              <input
                                type="text"
                                class="form-control"
                                name="name"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.name}
                              />
                            </div>
                            <div class="form-group mb-5">
                              <label for="exampleInputPassword1">
                                Username
                              </label>
                              <input
                                type="username"
                                class="form-control"
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
                                class="form-control"
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
                                class="form-control"
                                name="password"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.password}
                              />
                              <label for="exampleInputPassword1">
                              confirmPassword
                              </label>
                              <input
                                type="password"
                                class="form-control"
                                name="confirmPassword"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.confirmPassword}
                              />
                            </div>
                            <button type="submit" class="btn btn-theme">
                              Login
                            </button>
                          </form>
                        </div>
                      </div>

                      <div class="col-lg-6 d-none d-lg-inline-block">
                        <div class="rounded-right img-register">
                          <div class="overlay rounded-right"></div>
                          <div class="account-testimonial">
                            <h4 class="text-white mb-4">
                              This beautiful theme yours!
                            </h4>
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
