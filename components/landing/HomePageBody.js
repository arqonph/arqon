import React from 'react';
import ArqonScene from "../../assets/arqon_scene.gif";
import Image from "next/image";
import dynamic from "next/dynamic";

function HomePageBody() {
  const Model = dynamic(() => import("../landing/Model"), {
    ssr: false,
  });
  return (
    <div>
      <section className='flexVid'>
        <div className='bodyPage'>
          <div className='row d-flex justify-content-between'>
            <div className='col-xxl-5 bodyHeader'>
              <p className='header'>
                <span className='highlight'>Excellence is our culture </span>
                <br />
                <span>Our Commitment</span>
                <br />
              </p>
              <p className='sentence'>
              You’ll see it in the way we exchange ideas with you.
              We find out what makes your eyes light up, then leverage the best tools in our arsenal to enhance what you envisioned.
              Using cutting edge virtual design and Building Information Modeling (BIM), we are able to create visual space simulations to make more informed decisions and reduce errors that cost time and money.
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
                    tabIndex="-1"
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
  );
}

export default HomePageBody;
