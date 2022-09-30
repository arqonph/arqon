import Image from "next/image";
import Link from "next/link";

export default function services_page() {
  return (
    <div className="services_page align-content-center">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="container col-md-4 mb-5 archD">
            <div className="arDImg position-relative">
              <div className="contentBox">
                <span className="">Architectural Design</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    Meeting the need to create functional and aesthetically
                    please and harmonious living spaces. Arqon has the expertise
                    from client-tested experiences and almost a decade of
                    training from the best Architectural firms of our country.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Architectural Design</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container col-md-4 mb-5 DandB">
            <div className="dbImg position-relative">
              <div className="contentBox">
                <span className="">Design and Build</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    It is the balance between the architectural design, time,
                    quality, and cost - the clients’ most important
                    considerations. Design and Build service simplifies the
                    process of project delivery while providing creative
                    solutions.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Design and Build</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container col-md-4 mb-5 DandC">
            <div className="bimImg position-relative">
              <div className="contentBox">
                <span className="">Building Information Modeling (BIM)</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    Is a tool that we use to create visual space simulations. It
                    reduces conflicts and resolves problems ahead of time,
                    especially in multi-disciplinary projects. In Arqon, we are
                    equipped with skills and knowledge to be at par not only
                    with world-class architecture but also with the emerging
                    technology available to date.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Building Information Modeling (BIM)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container col-md-4 mb-5 archD">
            <div className="ariImg position-relative">
              <div className="contentBox">
                <span className="">Architectural Interiors</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    Is the detailed planning and design of the indoor areas of
                    the project. It is where functionality comes into play and
                    that it should fit for human use. Interiors are where we
                    interact and experience the vision we have.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Architectural Interiors</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container col-md-4 mb-5 DandB">
            <div className="pmImg position-relative">
              <div className="contentBox">
                <span className="">Project Management</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    Meeting the need to create functional and aesthetically
                    please and harmonious living spaces. Arqon has the expertise
                    from client-tested experiences and almost a decade of
                    training from the best Architectural firms of our country.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Project Management</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container col-md-4 mb-5 DandC">
            <div className="dcImg position-relative">
              <div className="contentBox">
                <span className="">Design Consultancy </span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    We cater to all types of projects - residential, commercial,
                    office and hospitality projects. With over 16 years of
                    valuable experience we have under our belt, our credentials
                    include leading the architectural teams responsible for some
                    of the most distinguished developments in the country.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Design Consultancy </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
