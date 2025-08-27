import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { OutlinedInput } from "../reusable-components.jsx/Form-Inputs";
const Contact = () => {
  const { t, i18n } = useTranslation();
  const imagebyLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/contact.png";
      case "en":
        return "/img/contact-eng.png";
      case "ru":
        return "/img/contact-rus.png";
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    number: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const validation = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "All Fields are Mandatory";
    if (!formData.message.trim())
      newErrors.message = "All Fields are Mandatory";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <img
        src={imagebyLanguage()}
        alt="contact"
        className={`ml-[4%] mt-[16px] h-[35px] ${
          scrollY >= 103 ? "mt-[127px]" : ""
        }`}
      />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="py-[15px] max-w-[1140px]">
            <div className="flex gap-5">
              <OutlinedInput
                type="text"
                name="name"
                label="Ad *"
                placeholder="Ad"
                id="Ad"
                onChange={handleChange}
                error={errors.name}
              />
              <OutlinedInput
                type="text"
                label="Soyad"
                placeholder="Soyad"
                onChange={handleChange}
                id="Soyad"
              />
            </div>
            <div className="flex gap-5">
              <OutlinedInput
                type="email"
                label="Elektron poçt"
                onChange={handleChange}
                placeholder="Elektron poçt"
                id="Elektron poçt"
              />
              <OutlinedInput
                type="tel"
                onChange={handleChange}
                label="MOBİL nömrə"
                placeholder="MOBİL nömrə"
                id="MOBİL nömrə"
              />
            </div>
            <div className="flex gap-5">
              <div className="mr-[10px]">
                <div className="relative mt-6">
                  <textarea
                    name="message"
                    className="peer w-[547px] h-[137px] py-[18.5px] px-[14px] border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-500"
                    id="message"
                    placeholder={t("SİZİN MESAJINIZ *")}
                    onChange={handleChange}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-2 bg-white px-1 text-sm text-black font-bold peer-placeholder-shown:text-base peer-focus:text-blue-700 transition-all"
                  >
                    {t("SİZİN MESAJINIZ *")}
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  className="transition-colors flex items-center ml-[15px] gap-2 transition-shadow transition-border duration-300 ease-in-out py-[6px] px-[18px] mt-3 mb-[80px] font-bold cursor-pointer"
                  style={{
                    backgroundColor: "rgb(0, 120, 172)",
                    backgroundImage:
                      "linear-gradient(rgb(84, 165, 199), rgb(0, 120, 172))",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "20px",
                  }}
                  type="submit"
                >
                  <svg
                    class="MuiSvgIcon-root"
                    className="w-[20px] h-[20px]"
                    fill="white"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                  </svg>
                  <span>{t("Göndərmək")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Contact;
