import React from "react";
import Typewriter from "typewriter-effect";

import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="box">
        <div class="overlay box"></div>

        {/* <video 
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://www.pexels.com/fi-fi/video/luonto-jarvi-maet-kansallispuisto-11998490/"
            type="video/mp4"
          />
        </video> */}

        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3 heder-title">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Helsinki")
                      .start()
                      .pauseFor(5000)
                      .deleteAll()
                      .typeString("Project Business Colloge")
                      .start()
                      .pauseFor(5000);
                  }}
                  options={{
                    loop: true,
                  }}
                />
              </h1>
              <p class="lead mb-0">Project Business Colloge</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
