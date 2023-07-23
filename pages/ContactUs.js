import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Title from "../components/landing/Title";
import Head from "next/head";
import Navbar from "/components/landing/Navigation-bar";
import Footer from "/components/landing/Footer";
import arqonTopImg from "/assets/01_Arqon_top_image.jpg";
import phoneIcon from "/assets/Icon_phone.png";
import emailIcon from "/assets/Icon_mail.png";
import homeIcon from "/assets/Icon_house.png";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendMessage = async (values) => {
    let msg = await fetch("api/sendMessage", {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(msg);
    try {
      if (msg.status == 200) {
        window.alert("Thank you for contacting us.");
        reset();
      }
    } catch (error) {
      window.alert("Something went wrong! " + error);
    }
  };

  return (
    <div className="contactUs">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      ></link>
      <Title />
      <Navbar />
      <div className="cover-container d-flex flex-column position-relative display-box">
        <Image src={arqonTopImg} />
        <div className="card-img-overlay">
          <h1 className="card-title SRHero-text">Contact Us</h1>
        </div>
      </div>
      <div className="container section-1 text-center pt-5 pb-5 ">
        <div className="row">
          <div className="text-center col-xxl-4 col-lg-4 col-md-2 mb-5">
            <p>
              <Image  src={phoneIcon} width={64} height={64} />
            </p>
            <div className="phone-email-home">+632 7502 7185</div>
            <div className="phone-email-home-desc">Call us anytime from</div>            
            <div className="phone-email-home-desc">Monday to Friday, 8am to 5pm.</div>
          </div>
          <div className="text-center col-xxl-4 col-lg-4 col-md-2 mb-5">
            <p>
            <Image  src={emailIcon} width={64} height={64} />
            </p>
            <div className="phone-email-home">info@arqon.com.ph</div>
            <div className="phone-email-home-desc">Email us anytime,</div>
            <div className="phone-email-home-desc">we usually reply within 24 hours.</div>
          </div>
          <div className="text-center col-xxl-4 col-lg-4 col-md-2 mb-5">
            <p>
            <Image  src={homeIcon} width={68} height={68} />
            </p>
            <div className="phone-email-home">Arqon Headquarters</div>
            <div className="phone-email-home-desc">Suite 1706 Atlanta Centre Building,</div>
            <div className="phone-email-home-desc">31 Annapolis St., Greenhills, San Juan City,</div>
            <div className="phone-email-home-desc">Metro Manila, Philippines 1552 (By Appointment Only)</div>
          </div>
        </div>
      </div>
      <div className="contact-us-welcome">
        We can't wait to welcome you in our headquarters!
      </div>

      <div className="row gx-0 residence pt-0 d-flex justify-content-center align-items-center">
        <div className="col-lg-6 projectContainer">
          <div className="position-relative contactUs-img2">
            {/* <Image src={contactUs-img2} alt='' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">Reception Area</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 projectContainer">
          <div className="position-relative contactUs-img4">
            {/* <Image src={contactUs-img4} alt='' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">Conference Room</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 projectContainer">
          <div className="position-relative contactUs-img3">
            {/* <Image src={contactUs-img3} alt='' width={920} height={455} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">Staff Area</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 projectContainer">
          <div className="position-relative contactUs-img4">
            {/* <Image src={contactUs-img3} alt='' width={920} height={455} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">Director's Office</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row contactUs-faq-row pt-4 pb-4 dinlight-black">
          <div className="col-md-4 ">
            <span className="contactUs-vision">
              LET'S BRING YOUR VISION TO LIFE
            </span>
            <br />
            <span className="contactUs-header">Contact us</span>

            <div className="col-xxl-6 col-xl-6">
              <form
                className="contactUsForm pt-3"
                onSubmit={handleSubmit(sendMessage)}
              >
                <div className="formFields ">
                  <div className="py-2 contactField">
                    <input
                      id="name"
                      type="text"
                      style={{ width: 350 }}
                      className="form-control rounded-0"
                      placeholder="Full Name"
                      {...register("name", {
                        required: "Your name is required",
                        minLength: {
                          value: 4,
                          message: "Minimum length is 4",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum length is 20",
                        },
                      })}
                    ></input>
                    <span>{errors.name?.message}</span>
                  </div>
                  <div className="py-2 contactField">
                    <input
                      id="email"
                      type="email"
                      style={{ width: 350 }}
                      className=" form-control rounded-0"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email Address Required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: "Invalid Email Address",
                        },
                      })}
                    ></input>
                    <span>{errors.email?.message}</span>
                  </div>
                  <div className="py-2 contactField">
                    <input
                      id="number"
                      type="text"
                      style={{ width: 350 }}
                      className=" form-control rounded-0"
                      placeholder="Contact Number"
                      {...register("number", {
                        required: "Phone Number Required",
                        pattern: {
                          value:
                            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                          message: "Please enter a valid phone number",
                        },
                      })}
                    ></input>
                    <span>{errors.number?.message}</span>
                  </div>
                  <div className="py-2 contactField">
                    <textarea
                      id="message"
                      type="field area"
                      style={{ width: 350 }}
                      className="textArea form-control rounded-0"
                      placeholder="Hello, I am interested in..."
                      {...register("message", {
                        required: "You need to enter your message.",
                        minLength: {
                          value: 20,
                          message: "Minimum length is 20",
                        },
                        maxLength: {
                          value: 1000,
                          message: "Maximum length is 1000",
                        },
                      })}
                    ></textarea>
                    <span>{errors.message?.message}</span>
                  </div>
                  <div className="pb-xxl-0 pb-xl-3">
                    <button
                      className="contactSubmitBtn"
                      type="submit"
                      id="submit"
                    >
                      {" "}
                      Send{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-1">
            <span>&nbsp;</span>
          </div>

          <div className="col-md-7">
            <span className="contactUs-vision">DO YOU HAVE QUESTIONS ?</span>
            <br />
            <span className="contactUs-header">Read our F.A.Q.</span>
            <br />
            <br />

            <div className="accordion" id="faqs">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button dinlight-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-1"
                    aria-expanded="true"
                    aria-controls="faq-1"
                  >
                    What services do you offer?
                  </button>
                </h2>
                <div
                  id="faq-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading-1"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body faq-body">
                    <p>
                      ARQON specializes in architectural design and design and
                      build projects. We also offer architectural interiors,
                      project management, design consultancy and building
                      information modeling (BIM) services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button dinlight-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-2"
                    aria-expanded="true"
                    aria-controls="faq-2"
                  >
                    What area do you cater to?
                  </button>
                </h2>
                <div
                  id="faq-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="heading-2"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body faq-body">
                    <p>
                      We offer design and build services in Metro Manila and
                      neighboring provinces but not limited to Cavite, Laguna,
                      Rizal, Batangas, Pampanga, Bulacan and Bataan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button dinlight-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-3"
                    aria-expanded="true"
                    aria-controls="faq-3"
                  >
                    What type of project do you accept?
                  </button>
                </h2>
                <div
                  id="faq-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="heading-3"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body faq-body">
                    <p>
                      We accept all project types - residential, office,
                      commercial and hospitality projects. We have 16 years of
                      valuable experience to provide service on every project
                      type you have in mind. You can also check us on LinkedIn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="heading-4">
                  <button
                    className="accordion-button dinlight-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-4"
                    aria-expanded="true"
                    aria-controls="faq-4"
                  >
                    Do you do renovations?
                  </button>
                </h2>
                <div
                  id="faq-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="heading-4"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body faq-body">
                    <p>
                      We do but depending on the scope of work. Send us a
                      message so we can evaluate the project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="heading-5">
                  <button
                    className="accordion-button dinlight-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-5"
                    aria-expanded="true"
                    aria-controls="faq-5"
                  >
                    How much do you charge per sqm?
                  </button>
                </h2>
                <div
                  id="faq-5"
                  className="accordion-collapse collapse "
                  aria-labelledby="heading-5"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body faq-body">
                    <p>
                      We don’t have fixed per sqm cost because it depends on
                      several factors like area, project type, terrain,
                      complexity, finishes and other project requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="heading-6">
                  <button
                    className="accordion-button dinlight-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-6"
                    aria-expanded="true"
                    aria-controls="faq-6"
                  >
                    I'm interested in your service, how do we start?
                  </button>
                </h2>
                <div
                  id="faq-6"
                  className="accordion-collapse collapse "
                  aria-labelledby="heading-6"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body faq-body">
                    <p>
                      That’s great! First you need to prepare your TCT or the
                      technical description of your property, the village’s
                      design and construction guideline, topography map, room
                      requirements and pegs how you envision your project. You
                      may email us at info@arqon.com.ph.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row pl-0">
          <div className="col-xs-12 col-sm-12 col-md-12 pl-0">
            <div className="embed-responsive ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.4502173590397!2d121.05235936406027!3d14.604747298883428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c81649c1ba6d%3A0xd4e7b11d4a94bd7c!2sARQON%20Design%20and%20Build!5e0!3m2!1sen!2sus!4v1662405465656!5m2!1sen!2sus"
                className="google-maps map-black-white"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
export default ContactUs;
