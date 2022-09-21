import Image from "next/image";
import aprilImg from "/assets/04_Arqon_Our Story_April.jpg";
import mannyImg from "/assets/04_Arqon_Our Story_Manny.jpg";
import chinoImg from "/assets/04_Arqon_Our Story_Chino.jpg";
import paoloImg from "/assets/04_Arqon_Our Story_Paolo.jpg";
import joshuaImg from "/assets/04_Arqon_Our Story_Joshua.jpg";
import koebeeImg from "/assets/04_Arqon_Our Story_Koebee.jpg";

export default function team() {
  return (
    <div className="story">
      {/* <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm-4">
            <div className="vc_column-inner">
              <div className="team-member dark">
                <div className="content-box">
                  <div className="image-container">
                    <Image src={aprilImg} alt="Ms. April" />
                    <div className="side-overlay"></div>
                    <div className="vertical-number-box">
                      <span className="vertical-number">Managing Director</span>
                    </div>
                    <div className="member-details col-sm-4">
                      <hr></hr>
                      <span className="member-info col-sm-4">
                        Thanks to his extensive international experience, April
                        has gathered a community of creativity and innovation
                        experts, always providing insights and advice on getting
                        better ideas, how to implement them and provide greater
                        value in complete interior or exterior design and decor.
                      </span>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="content-box-info">
                    <h4>Arch. April Pulido</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="vc_column-inner">
              <div className="team-member dark">
                <div className="content-box">
                  <div className="image-container">
                    <Image src={mannyImg} alt="Manny Pulido" />
                    <div className="side-overlay"></div>
                    <div className="vertical-number-box">
                      <span className="vertical-number">
                        Director | Designer | BIM Manager
                      </span>
                    </div>
                    <div className="member-details">
                      <hr></hr>
                      <span className="member-info">
                        Thanks to his extensive international experience, Manny
                        has gathered a community of creativity and innovation
                        experts, always providing insights and advice on getting
                        better ideas, how to implement them and provide greater
                        value in complete interior or exterior design and decor.
                      </span>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="content-box-info">
                    <h4>Arch. Manny Pulido</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="vc_column-inner">
              <div className="team-member dark">
                <div className="content-box">
                  <div className="image-container">
                    <Image src={chinoImg} alt="Chino Buitizon" />
                    <div className="side-overlay"></div>
                    <div className="vertical-number-box">
                      <span className="vertical-number">
                        Director | Designer | Project Manager
                      </span>
                    </div>
                    <div className="member-details">
                      <hr></hr>
                      <span className="member-info">
                        Thanks to his extensive international experience, Chino
                        has gathered a community of creativity and innovation
                        experts, always providing insights and advice on getting
                        better ideas, how to implement them and provide greater
                        value in complete interior or exterior design and decor.
                      </span>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="content-box-info">
                    <h4>Arch. Chino Buitizon</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm-4">
            <div className="vc_column-inner">
              <div className="team-member dark">
                <div className="content-box">
                  <div className="image-container">
                    <Image src={paoloImg} alt="Paolo Manlapaz" />
                    <div className="side-overlay"></div>
                    <div className="vertical-number-box">
                      <span className="vertical-number">Site Engineer</span>
                    </div>
                    <div className="member-details">
                      <hr></hr>
                      <span className="member-info">
                        Thanks to his extensive international experience, Paolo
                        has gathered a community of creativity and innovation
                        experts, always providing insights and advice on getting
                        better ideas, how to implement them and provide greater
                        value in complete interior or exterior design and decor.
                      </span>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="content-box-info">
                    <h4>Engr. Paolo Manlapaz</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="vc_column-inner">
              <div className="team-member dark">
                <div className="content-box">
                  <div className="image-container">
                    <Image src={joshuaImg} alt="Joshua Aquino" />
                    <div className="side-overlay"></div>
                    <div className="vertical-number-box">
                      <span className="vertical-number">Junior Architect</span>
                    </div>
                    <div className="member-details">
                      <hr></hr>
                      <span className="member-info">
                        Thanks to his extensive international experience, Joshua
                        has gathered a community of creativity and innovation
                        experts, always providing insights and advice on getting
                        better ideas, how to implement them and provide greater
                        value in complete interior or exterior design and decor.
                      </span>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="content-box-info">
                    <h4>Arch. Joshua Aquino</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="vc_column-inner">
              <div className="team-member dark">
                <div className="content-box">
                  <div className="image-container">
                    <Image src={koebeeImg} alt="Koebee Cabigao" />
                    <div className="side-overlay"></div>
                    <div className="vertical-number-box">
                      <span className="vertical-number">
                        Admin and Accounting
                      </span>
                    </div>
                    <div className="member-details">
                      <hr></hr>
                      <span className="member-info">
                        Thanks to his extensive international experience, Koebee
                        has gathered a community of creativity and innovation
                        experts, always providing insights and advice on getting
                        better ideas, how to implement them and provide greater
                        value in complete interior or exterior design and decor.
                      </span>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="content-box-info">
                    <h4>Koebee Cabigao</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 aprilMD">
            <div className="aprilImg position-relative">
              <div className="contentBox">
                <span className="">Arch. April Pulido</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    April’s previous works as Senior Architect at GF and
                    Partners Architects for 8 years greatly contributed to the
                    firm’s prestigious recognitions by BCI Asia as one of the
                    top 10 architectural firms in the country. Her skill and
                    experience have helped her take on some of the most
                    celebrated projects of Ayala Land Premiere including upscale
                    residential condominiums, high-end commercial structures and
                    triple A offices.
                    <br></br>
                    <br></br>
                    <nbspan>
                      A former collegiate volleyball player at the University of
                      Santo Tomas and self professed travel lover, this
                      multi-hyphenate also includes professional wedding
                      photographer as one of her many titles. April will be
                      taking her Master of Business Administration (MBA) in the
                      Ateneo Graduate School of Business under the Ateneo-Regis
                      program this academic year.
                    </nbspan>
                    <br className="pt-5"></br>
                    <a className="linkedin" href="https://www.linkedin.com/">
                      LinkedIn:
                    </a>
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Arch. April Pulido</span>
                </div>
              </div>
              <ul className="vertical-box">
                <li className="verticl-text">
                  <span className="designation">Managing Director</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 mannyBIM">
            <div className="mannyImg position-relative">
              <div className="contentBox">
                <span className="">Arch. Manny Pulido</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    Manny’s journey to being a founding partner of ARQON began
                    way before his College of Architecture days at University of
                    Santo Tomas, where he graduated cum laude. His passion for
                    freehand drawing and rendering built the foundations of his
                    career and his stint as Asst. Designer at RR Payumo and
                    Partners and developed his natural eye for thoughtful
                    functional design. As Studio BIM Manager at Aidea
                    Philippines, he was part of the team that bagged the
                    prestigious international award for Sustainability,
                    Buildability and Constructability of the BIM Buzz in
                    Singapore demonstrating how Building Information Modeling
                    (BIM) can be used to its full potential.
                    <br></br>
                    <br></br>
                    <nbspan>
                      It was only a matter of time until Manny found himself
                      training his own pool of talented architects as BIM
                      Manager at GF and Partners Architects, one of the
                      Philippines’ most prominent architectural firms. LinkedIn:
                    </nbspan>
                    <br className="pt-5"></br>
                    <a className="linkedin" href="https://www.linkedin.com/">
                      LinkedIn:
                    </a>
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Arch. Manny Pulido</span>
                </div>
              </div>
              <ul className="vertical-box">
                <li className="verticl-text">
                  <span className="designation">
                    Director | Designer | BIM Manager
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 chinoPM">
            <div className="chinoImg position-relative">
              <div className="contentBox">
                <span className="">Arch. Chino Buitizon</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    Chino’s scholastic foundation in Architecture already had
                    him garnering recognition for his talents from his
                    professors and peers at the University of Santo Tomas. His
                    college thesis, which was given an outstanding distinction
                    in his batch, was handpicked as the school’s official entry
                    to the Archiprix 2007 Hunter Douglas awards held in
                    Shanghai, China.
                    <br></br>
                    <br></br>
                    <nbspan>
                      His background with GF and Partners Architects in large
                      scale residential and commercial projects include One
                      Serenda, Bonifacio High Street, Marquee Mall and Abreeza
                      Mall in Davao. He went on to pursue his professional
                      practice where he designed and built residences in private
                      subdivisions, as well as commercial developments and
                      institutional centers.
                    </nbspan>
                    <br className="pt-5"></br>
                    <a className="linkedin" href="https://www.linkedin.com/">
                      LinkedIn:
                    </a>
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Arch. Chino Buitizon</span>
                </div>
              </div>
              <ul className="vertical-box">
                <li className="verticl-text">
                  <span className="designation">
                    Director | Designer | Project Manager
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 aprilMD">
            <div className="paoloImg position-relative">
              <div className="contentBox">
                <span className="">Engr. Paolo Manlapaz</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    <br></br>
                    <br></br>
                    <nbspan></nbspan>
                    <br className="pt-5"></br>
                    <a className="linkedin" href="https://www.linkedin.com/">
                      LinkedIn:
                    </a>
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Engr. Paolo Manlapaz</span>
                </div>
              </div>
              <ul className="vertical-box">
                <li className="verticl-text">
                  <span className="designation">Site Engineer</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 mannyBIM">
            <div className="joshImg position-relative">
              <div className="contentBox">
                <span className="">Arch. Joshua Aquino</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    <br></br>
                    <br></br>
                    <nbspan></nbspan>
                    <br className="pt-5"></br>
                    <a className="linkedin" href="https://www.linkedin.com/">
                      LinkedIn:
                    </a>
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Arch. Joshua Aquino</span>
                </div>
              </div>
              <ul className="vertical-box">
                <li className="verticl-text">
                  <span className="designation">Junior Architect</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 chinoPM">
            <div className="koebeeImg position-relative">
              <div className="contentBox">
                <span className="">Koebee Cabigao</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    <br></br>
                    <br></br>
                    <nbspan></nbspan>
                    <br className="pt-5"></br>
                    <a className="linkedin" href="https://www.linkedin.com/">
                      LinkedIn:
                    </a>
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Koebee Cabigao</span>
                </div>
              </div>
              <ul className="vertical-box">
                <li className="verticl-text">
                  <span className="designation">Accounting Dept.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
