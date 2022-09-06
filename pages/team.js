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
      <div className="container pt-5 pb-5">
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
      </div>
    </div>
  );
}
