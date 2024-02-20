import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";
import swal from "sweetalert";

import "./Contact.css";

import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div className="container-for-register">
        <div className="test">
          <div id="main-wrapper" class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10">
                <div class="card border-0">
                  <div class="card-body p-0">
                    <div class="row no-gutters">
                      <div class="col-lg-6">
                        <div class="p-5">
                          <p class="text-muted mt-2 mb-5">Contact Us Please Say to us </p>

                          <form>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Sukunimi</label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                              />
                            </div>
                            <div class="form-group mb-5">
                              <label for="exampleInputPassword1">
                                Sähkoposti
                              </label>
                              <input
                                type="username"
                                class="form-control"
                                id="exampleInputPassword1"
                              />
                              <label for="exampleInputPassword1">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                              />
                             
                              <label for="exampleInputPassword1">
                                Comment
                              </label>
                              <input
                                type="textarea"
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
                        <div class="rounded-right img-register">
                          <div class="overlay rounded-right"></div>
                          <div class="account-testimonial">
                            <h4 class="text-white mb-4">
                              SANOTAAN MEIDÄN
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
