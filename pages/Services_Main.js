import Image from "next/image";
import Head from "next/head";
import Title from "../components/landing/Title";
import Navbar from "../components/landing/Navigation-bar";
import Footer from "../components/landing/Footer";
import arqonTopImg from "/assets/01_Arqon_top_image.jpg";
import Services from "../components/landing/Services_Section.js";

import Link from "next/link";

export default function services() {
  return (
    <div className="services_main">
      <Title />
      <Navbar />
      <div className="cover-container d-flex flex-column position-relative display-box">
        <Image src={arqonTopImg} />
        <div className="card-img-overlay">
          <h1 className="card-title SRHero-text">Services</h1>
        </div>
      </div>
      <div className="container section-1 text-center pt-5 pb-5 ">
        <div className="row">
          <div className="col">
            <h1 className="hr-services">
              <span className="text-black">
                WE PROVIDE END-TO-END SOLUTIONS
              </span>
            </h1>
            <p>
              ARQON is a full-service architectural firm that specializes in
              streamlined design and build projects.<br></br>
              We will help you through every step of the project’s full life
              cycle by providing the following services to fulfill your needs:
            </p>
          </div>
        </div>
      </div>
      <Services />
      <div className="cover-container section-2">
        <div className="container text-center pt-5 pb-5 ">
          <div className="row">
            <div className="col">
              <p>
                <span className="text-service">
                  At ARQON, we keep our word and do what we say. We are a
                  collaborative one-stop shop—with emphasis on client
                  collaboration.
                  <br></br>
                  <br></br>
                  Tell us your vision. Let’s see how we can make it come to
                  life.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
