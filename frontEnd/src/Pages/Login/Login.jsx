import React, { useContext, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";

import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigait = useNavigate();
  const authContext = useContext(AuthContext);

  // const form = useFormik({
  //   initialValues: { identifier: "", password: "" },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     fetch(`http://localhost:4000/v1/auth/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         res.json();
  //       })
  //       .then((result) => {
  //         console.log(result);
  //       });
  //   },
  // });

  const userLogin = (event) => {
    event.preventDefault();

    const userData = {
      identifier: username,
      password,
    };

    fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((resul) => {
        setUsername("");
        setPassword("");
        swal({
          title: "Tervetuloa",
          buttons: "OKEI",
          icon: "success",
        }).then((value) => {
          navigait("/");
        });
        authContext.login({}, resul.accessToken);
      })
      .catch((err) => {
        swal({
          title: "Käyttäjätunnus ja salasana eivät ole oikein",
          buttons: "Uudestan",
          icon: "error",
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className="test">
        <div id="main-wrapper" className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 ">
              <div className="card border-0 ">
                <div className="card-body p-0">
                  <div className="row no-gutters ">
                    <div className="col-lg-6">
                      <div className="p-5">
                        <p className="text-muted mt-2 mb-5">
                          Anna sähköpostiosoitteesi ja salasanasi päästäksesi
                          kaikkiin paikkoihin.
                        </p>

                        <form>
                          <div className="form-group">
                            <label>SÄHKOPÖSTI</label>
                            <input
                              style={{ fontSize: "18px" }}
                              type="text"
                              className="form-control input-title"
                              id="exampleInputEmail1"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                          <div className="form-group mb-5">
                            <label for="exampleInputPassword1">SALAASANA</label>
                            <input
                              style={{ fontSize: "18px" }}
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <button
                            type="submit"
                            onClick={userLogin}
                            className="btn-form fs-2"
                          >
                            JATKA
                          </button>
                        </form>
                      </div>
                    </div>

                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right">
                        <div className="overlay rounded-right"></div>
                        <div className="account-testimonial">
                          <h4 className="text-white mb-4">
                            {/* This beautiful theme yours! */}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted text-center mt-5 mb-0">
                Eikö sinulla ole tiliä?{" "}
                <Link to={"/register"} className="text-primary ml-1">
                  Rekisteröidy
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
