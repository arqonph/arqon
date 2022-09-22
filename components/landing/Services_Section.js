import Image from "next/image";
import Link from "next/link";

export default function services_page() {
  return (
    <div className="services_page">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 aprilMD">
            <div className="aprilImg position-relative">
              <div className="contentBox">
                <span className="">Architectural Design</span>
              </div>
              <div className="descriptionOverlay">
                <a href="#" class="icon" title="User Profile">
                  <i class="fa fa-user"></i>
                </a>
                <div className="contentBoxOverlay">
                  <span className="">Architectural Design</span>
                </div>
              </div>
            </div>
          </div>
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 mannyBIM">
            <div className="mannyImg position-relative">
              <div className="contentBox">
                <span className="">Arch. Manny Pulido</span>
              </div>
              <div className="descriptionOverlay">
                <a href="#" class="icon" title="User Profile">
                  <i class="fa fa-user"></i>
                </a>
                <div className="contentBoxOverlay">
                  <span className="">Arch. Manny Pulido</span>
                </div>
              </div>
            </div>
          </div>
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 chinoPM">
            <div className="chinoImg position-relative">
              <div className="contentBox">
                <span className="">Arch. Chino Buitizon</span>
              </div>
              <div className="descriptionOverlay">
                <a href="#" class="icon" title="User Profile">
                  <i class="fa fa-user"></i>
                </a>
                <div className="contentBoxOverlay">
                  <span className="">Arch. Chino Buitizon</span>
                </div>
              </div>
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
                <a href="#" class="icon" title="User Profile">
                  <i class="fa fa-user"></i>
                </a>
                <div className="contentBoxOverlay">
                  <span className="">Engr. Paolo Manlapaz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 mannyBIM">
            <div className="joshImg position-relative">
              <div className="contentBox">
                <span className="">Arch. Joshua Aquino</span>
              </div>
              <div className="descriptionOverlay">
                <a href="#" class="icon" title="User Profile">
                  <i class="fa fa-user"></i>
                </a>
                <div className="contentBoxOverlay">
                  <span className="">Arch. Joshua Aquino</span>
                </div>
              </div>
            </div>
          </div>
          <div className="teamHead col-xxl-3 col-lg-4 col-md-6 chinoPM">
            <div className="koebeeImg position-relative">
              <div className="contentBox">
                <span className="">Koebee Cabigao</span>
              </div>
              <div className="descriptionOverlay">
                <a href="#" class="icon" title="User Profile">
                  <i class="fa fa-user"></i>
                </a>
                <div className="contentBoxOverlay">
                  <span className="">Koebee Cabigao</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
