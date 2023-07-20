import Image from 'next/image';
import Link from 'next/link';

export default function services_page() {
  return (
    <div className="services_page align-content-center">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="ontainer col-xxl-4 col-lg-6 col-md-8 mb-5 archD">
            <div className="arDImg position-relative">
              <div className="contentBox">
                <span className="">Architectural Design</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    We meet the need to create functional and aesthetically
                    pleasing, and harmonious living spaces. ARQON has the
                    expertise from client-tested experiences and almost a decade
                    of training from the best Architectural firms of our
                    country.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Architectural Design</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ontainer col-xxl-4 col-lg-6 col-md-8 mb-5 DandB">
            <div className="dbImg position-relative">
              <div className="contentBox">
                <span className="">Design and Build</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    ARQON simplify the process of project delivery while
                    providing creative solutions. Design and Build services
                    balance architectural design, time, quality, and
                    cost—important factors that clients should always consider.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Design and Build</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ontainer col-xxl-4 col-lg-6 col-md-8 mb-5 DandC">
            <div className="bimImg position-relative">
              <div className="contentBox">
                <span className="">Architectural Interiors</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    We ensure that the indoor areas of the project are
                    functional and fit for human use. Interiors are where we
                    interact and should be planned and designed to convey the
                    vision that clients have.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Architectural Interiors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="ontainer col-xxl-4 col-lg-6 col-md-8 mb-5 archD">
            <div className="ariImg position-relative">
              <div className="contentBox">
                <span className="">Project Management</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    We direct and organize each part of the project life cycle
                    from ideation to completion. It’s a holistic practice with a
                    complex discipline to oversee the project procedures. Our
                    goal is to ensure that projects are delivered on time and
                    according to requirements and budget.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Project Management</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ontainer col-xxl-4 col-lg-6 col-md-8 mb-5 DandB">
            <div className="pmImg position-relative">
              <div className="contentBox">
                <span className="">Building Information Modeling (BIM)</span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    ARQON creates visual space simulations using BIM to ensure
                    that ideas and directions are clearly communicated and
                    possible problems are resolved ahead of time, especially in
                    multi-disciplinary projects. In ARQON, we are equipped with
                    skills and knowledge to be at par not only with world-class
                    architecture but also with the emerging technology available
                    to date.
                  </span>
                </div>
                <div className="contentBoxOverlay">
                  <span className="">Building Information Modeling (BIM)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ontainer col-xxl-4 col-lg-6 col-md-8 mb-5 DandC">
            <div className="dcImg position-relative">
              <div className="contentBox">
                <span className="">Design Consultancy </span>
              </div>
              <div className="descriptionOverlay">
                <div className="info">
                  <span>
                    We cater to all types of projects— residential, commercial,
                    office, and hospitality. With over 16 years of valuable
                    experience, our credentials in design consultancy include
                    leading the architectural teams responsible for some of the
                    most distinguished developments in the country.
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
