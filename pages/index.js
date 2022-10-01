import Head from "next/head";
import Navbar from "../components/landing/Navigation-bar";
import Footer from "../components/landing/Footer";
import HomePageBody from "../components/landing/HomePageBody";
import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import Projects from "../components/landing/Projects";
import ContactUs from "../components/landing/ContactUs";
import Clientreview from "../components/landing/Clientreview";
import dynamic from "next/dynamic";
import Image from "next/image";
import ArqonScene from "../assets/arqon scene.gif";

export default function Home() {
  const Model = dynamic(() => import("../components/landing/Model"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>ARQON</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="We are a full service architectural firm that specializes in streamlined design and build projects"
        />
        <link rel="icon" href="/Arqon-Logos-A-White.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://arqon.com.ph/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ARQON Website" />
        <meta
          property="og:description"
          content="We are a full service architectural firm that specializes in streamlined design and build projects"
        />
        <meta property="og:image" content="/01_Arqon_Home page_01-01.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta property="twitter:url" content="https://arqon.com.ph/" />
        <meta name="twitter:title" content="ARQON Website" />
        <meta
          name="twitter:description"
          content="We are a full service architectural firm that specializes in streamlined design and build projects"
        />
        <meta name="twitter:image" content="/01_Arqon_Home page_01-01.jpg" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      {/* <Popup /> */}
      {/* <HomePageBody /> */}
      <div>
        <section className="flexVid">
          <div className="bodyPage">
            <div className="row d-flex justify-content-between">
              <div className="col-xxl-5 bodyHeader">
                <p className="header">
                  <span className="highlight">Excellence</span>
                  <span> is our culture.</span>
                  <br />
                  <span>Our</span>
                  <span className="highlight"> Commitment.</span>
                  <br />
                </p>
                <p className="sentence">
                  You’ll see it in the way we exchange ideas with you. We find
                  out what makes your eyes light up, then leverage the best
                  tools in our arsenal to enhance it. Using cutting edge virtual
                  design and Building Information Modeling (BIM), we are able to
                  create visual space simulations to make more informed
                  decisions and reduce errors that cost time and money.
                </p>
              </div>
              <div className="obj3d col-xxl-6 text-center">
                <div className="container">
                  <Image
                    src={ArqonScene}
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  />

                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl modal-dialog-centered ">
                      <div className="modal-content">
                        <div className="modal-header ">
                          <Model />
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Projects />
      {/* <Clientreview /> */}
      <ContactUs />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
