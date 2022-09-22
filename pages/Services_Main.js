import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/landing/Navigation-bar";
import Footer from "../components/landing/Footer";
import arqonTopImg from "/assets/01_Arqon_top_image.jpg";
import Services from "../components/landing/Services_Section.js";

import Link from "next/link";

export default function services() {
  return (
    <div className="services_main">
      <Head>
        <title>ARQON</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Website for ARQON" />
        <link rel="icon" href="/Arqon-Logos-A-White.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="cover-container d-flex flex-column position-relative display-box">
        <Image src={arqonTopImg} />
        <div className="card-img-overlay">
          <h1 className="card-title hero-text">Services</h1>
        </div>
      </div>
      <div className="container section-1 text-center pt-5 pb-5 ">
        <div className="row">
          <div className="col">
            <h1>
              <span className="text-black">We provide</span>
              &nbsp;<span className="text-turquoise"> END-to-END</span>&nbsp;
              <span className="text-black">solutions</span>
            </h1>
            <hr className="hr-story"></hr>
            <p>
              ARQON provides END-TO-END solutions with quality of service from
              architectural design, project management and design and build
              needs. We are equipped with knowledge and skills that would help
              you in every step of the project’s full life cycle.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <div className="cover-container section-2">
        <div className="container text-center pt-5 pb-5 ">
          <div className="row">
            <div className="col">
              <h1 className="story-heading"> NEED TO GET IN TOUCH</h1>
              <p>
                <span className="text-story">
                  No matter what your question, we're here to help.<br></br>{" "}
                  Give us a call or send an email.
                </span>
              </p>
              <Link href="ContactUs">
                <button
                  type="button"
                  className="btn btn-contact btn-dark rounded-0 background-color:#707070 !important"
                >
                  Contact Us
                </button>
              </Link>
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
