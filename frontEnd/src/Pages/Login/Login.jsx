import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import swal from "sweetalert";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const form = useFormik({
    initialValues: { userName: "", password: "", check: false },
    onSubmit: (values) => {
      console.log("all values=>", values);
      swal({
        title: "Login is successful",
        buttons: "OK",
        icon: "success",
      }).then((valu) => navigate("/"));
    },
  });

  return (
    <>
      <Navbar />
      <div className="test">
        <div id="main-wrapper" class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 ">
              <div class="card border-0 ">
                <div class="card-body p-0">
                  <div class="row no-gutters login-box">
                    <div class="col-lg-6">
                      <div class="p-5">
                        <p class="text-muted mt-2 mb-5">
                          Enter your email address and password to access all
                          place.
                        </p>

                        <form>
                          <div class="form-group">
                            <label for="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                            />
                          </div>
                          <div class="form-group mb-5">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                              type="password"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <button type="submit" class="btn btn-theme">
                            Login
                          </button>
                        </form>
                      </div>
                    </div>

                    <div class="col-lg-6 d-none d-lg-inline-block">
                      <div class="account-block rounded-right">
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

              <p class="text-muted text-center mt-5 mb-0">
                Don't have an account?{" "}
                <Link to={"/register"} class="text-primary ml-1">
                  register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
