import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import loginBg from "../../public/video/loginBg.mp4";
import discountImg from "../../public/img/discountImg.png";
import pizzaImg from "../../public/img/pizzaImg.png";
import price from "../../public/img/price.png";
import order from "../../public/img/order.png";
import flag from "../../public/img/flag.png";
import OTPModal from "../components/OtpModal";
import RegistrationModal from "../components/RegistrationModal";

const data = [
  { icon: pizzaImg, label: "Əla yemək" },
  { icon: discountImg, label: "Əla təkliflər" },
  { icon: order, label: "3 addımda sifariş" },
  { icon: price, label: "Xal qazan, pulsuz pizza əldə et" },
];

const phoneSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Telefon nömrəsi mütləqdir")
    .matches(/^[0-9]{9}$/, "9 rəqəm daxil edin"),
});

const Login = () => {
  const [step, setStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handlePhoneSubmit = (values) => {
    setPhoneNumber(values.phone);
    setStep("otp");
    setShowOtpModal(true);
  };

  const handleOtpVerify = (otpCode) => {
    console.log("OTP verified:", otpCode);
    setShowOtpModal(false);
    setShowRegistrationModal(true);
  };

  const handleRegistrationSubmit = (values) => {
    console.log("Registration data:", values);
    setShowRegistrationModal(false);
    setStep("phone");
  };

  return (
    <div className="w-full h-auto md:h-screen relative overflow-hidden pb-5">
      {/* Background Video */}
      <video
        src={loginBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/85 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-start text-white px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center mt-20 mb-16">
          <div className="w-[250px] md:w-[300px] h-[80px] md:h-[100px] mb-3 md:mb-5">
            <img
              className="w-full h-full object-contain"
              src="https://dominospizza.az/static/media/logo-login.e55d00f5.png"
              alt="Dominos Logo"
            />
          </div>
          <p className="text-center text-base md:text-lg font-medium">
            XÜSUSİ VƏ YENİ FÜRSƏTLƏR ÜÇÜN GİRİŞ EDİN
          </p>
        </div>

        {/* Features */}
        <div className="w-full max-w-4xl mb-6 md:mb-8">
          <ul className="flex flex-wrap items-start justify-center gap-4 lg:justify-between">
            {data.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-center max-w-[200px] gap-2.5 p-1.5 md:p-4"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-white text-base leading-relaxed">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Phone Input */}
        {step === "phone" && (
          <div className="w-full max-w-lg mx-auto">
            <Formik
              initialValues={{ phone: "" }}
              validationSchema={phoneSchema}
              onSubmit={handlePhoneSubmit}
            >
              <Form className="w-full flex flex-col items-center ">
                <div className="w-full  mb-4 relative">
                  <p className="text-white text-sm font-medium text-center mb-4 tracking-wider absolute top-[-8%] left-[10%]  bg-black/85 backdrop-blur   px-2 z-30">
                    ENTER YOUR
                    MOBILE NUMBER
                  </p>
                  <div className="relative w-full max-w-md mx-auto flex justify-center items-center">
                    <div className="absolute left-4 top-0 h-full flex items-center pl-4 gap-2 z-10">
                        <img className="w-[30px] h-[20x]" src={flag} alt="" />
                      <span className="text-gray-600 font-medium">+994</span>
                    </div>
                    <Field
                      type="tel"
                      name="phone"
                      className="w-[90%] h-[75px] bg-transparent border-2 border-white rounded outline-none pl-24 pr-4 text-white text-lg placeholder-gray-400"
                      placeholder=""
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="span"
                    className="text-red-400 text-xs mt-2 block text-center"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded font-medium text-lg tracking-wider transition-colors"
                >
                  CONTINUE
                </button>
              </Form>
            </Formik>
          </div>
        )}
      </div>

      {/* Modals */}
      {showOtpModal && (
        <OTPModal
          phoneNumber={phoneNumber}
          onClose={() => {
            setShowOtpModal(false);
            setStep("phone");
          }}
          onVerify={handleOtpVerify}
        />
      )}

      {showRegistrationModal && (
        <RegistrationModal
          phoneNumber={phoneNumber}
          onClose={() => {
            setShowRegistrationModal(false);
            setStep("phone");
          }}
          onSubmit={handleRegistrationSubmit}
        />
      )}
    </div>
  );
};

export default Login;
