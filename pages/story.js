import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/landing/Navigation-bar";
import Footer from "../components/landing/Footer";
import arqonTopImg from "/assets/01_Arqon_top_image.jpg";
import arqonStoryImage from "../assets/Arqon_Our Story Group.jpg";
import Team from "/pages/team.js";

export default function story() {
  return (
    <div className="story">
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
          <h1 className="card-title hero-text">Our Story</h1>
        </div>
      </div>
      <div className="container section-1 text-center pt-5 pb-5 ">
        <div className="row">
          <div className="col">
            <h1>
              <span className="text-black">
                It all started with our passion for
              </span>
              &nbsp;<span className="text-turquoise">TRAVEL</span>&nbsp;
              <span className="text-black">and</span>&nbsp;
              <span className="text-turquoise">DESIGN.</span>
            </h1>
            <hr className="hr-story"></hr>
            <p>
              Somewhere between touring the centuries-old building in Quebec,
              and driving through the plains of Arizona and steel sky scrapers
              of New York City, three architects on the trip of their lifetime
              found themselves enthralled by the structural marvels and
              innovative structures of the modern world.
              <br></br>
              <br></br>ARQON, proudly Filipino company with a global perspective
              on design and build, was established not long after.
            </p>
          </div>
        </div>
      </div>
      <div className="cover-container d-flex flex-column position-relative display-box">
        <Image src={arqonStoryImage} />
      </div>
      <div className="cover-container section-2">
        <div className="container text-center pt-5 pb-5 ">
          <div className="row">
            <div className="col">
              <h1 className="story-heading"> This is our story</h1>
              <p>
                <span className="text-story">
                  Real frienships and honest relationships build the strong
                  foundation of our company. <br></br> We’re motivated to be
                </span>
                &nbsp;
                <span className="text-white">rock stars</span>
                &nbsp;
                <span className="text-story">of the built environment.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <div className="cover-container section-3">
        <div className="container text-left pt-5 pb-5 ">
          <div className="row">
            <div className="col">
              <h3 className="text-white"> COLLEAGUE’S TESTIMONIALS</h3>
              <hr className="bg-white border-4 border-top border-white"></hr>
              For April:
              <p className="col-sm-6">
                Over the years, aside from April’s expertise in leading the
                project team that has been instrumental to the growth of the
                firm. April overcame many challenges through her hard work,
                dedication and incredible work ethics. She is teachable,
                coachable, resourceful and adapts well on the ever changing
                demand of every project. April is also an effective
                communicator. This skill set coupled with her insatiable
                appetite for knowledge make her a brilliant and well-rounded
                professional.
              </p>
              <p>
                Arch. Teofilo “Boyet” Santiago, <br></br>
                Jr. Senior Partner (Retired) <br></br>
                GF & Partners Architects
              </p>
              <p>
                For Chino: <br></br>
                Request from Sir Arlie
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
