import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { Person, GMail, Chat, Submit } from "./Icons";
import { validateForm } from "../utils/formValidation";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Contact = () => {
  const initialFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);
  const initialErrData = { nameError: "", emailError: "", messageError: "" };
  const [errData, setErrData] = useState(initialErrData);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (submitStatus) setSubmitStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(
      formData,
      setFormData,
      setErrData,
      initialFormData,
      initialErrData,
      setSubmitStatus,
      setIsSubmitting
    );
  };

  useEffect(() => {
    setFormData(initialFormData);
    setErrData(initialErrData);
  }, []);

  // Auto-dismiss success/error message after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div
      name="Contact"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b to-gray-800 from-black"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Contact"
            secondHeading="Fill the form to get in touch with me"
          />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex gap-3 flex-col w-full md:w-1/2 lg:w-2/3"
            >
              <AnimatedWrapper>
                <div className=" w-full">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className={`peer form-input ${
                        errData.nameError !== "" && "border-red-500"
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormIcon name="person" />
                  </div>
                  <ErrorBox message={errData.nameError} />
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper>
                <div className="w-full">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className={`peer form-input ${
                        errData.emailError !== "" && "border-red-500"
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <FormIcon name="gmail" />
                  </div>
                  <ErrorBox message={errData.emailError} />
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <div className=" w-full">
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="10"
                      cols="30"
                      className={`peer form-input ${
                        errData.messageError !== "" && "border-red-500"
                      }`}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <FormIcon name="chat" />
                  </div>
                  <ErrorBox message={errData.messageError} />
                </div>
              </AnimatedWrapper>

              {/* Success / Error Toast */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-md bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-medium animate-pulse">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-md bg-red-500/20 border border-red-500/50 text-red-400 text-sm font-medium">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Failed to send message. Please try again or email me directly.
                </div>
              )}

              <AnimatedWrapper>
                {" "}
                <button
                  disabled={isSubmitting}
                  className={`hover:text-blue-800 flex items-center justify-center mr-auto group text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md font-semibold px-12 py-2 hover:scale-[1.02] duration-500 ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Let's Connect
                      <span className="scale-0 -translate-x-10 origin-left group-hover:scale-100 group-hover:translate-x-3 duration-300 transition-all delay-200 ease-in-out">
                        {" "}
                        <Submit />
                      </span>
                    </>
                  )}
                </button>
              </AnimatedWrapper>
            </form>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Contact;

const FormIcon = ({ name }) => {
  return (
    <span
      className={`peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 ${
        name === "chat" ? "top-[0.8rem]" : "top-1/2 -translate-y-1/2"
      }`}
    >
      {name === "person" && <Person />}
      {name === "gmail" && <GMail />}
      {name === "chat" && <Chat />}
    </span>
  );
};
const ErrorBox = ({ message }) => {
  return (
    <div className=" text-sm min-h-[1.3rem] text-red-500 px-3">{message}</div>
  );
};
