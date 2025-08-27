import { useTranslation } from "react-i18next";
import { OutlinedInput } from "../reusable-components.jsx/Form-Inputs";
import { useEffect, useState } from "react";
const Suggestions = () => {
  const { t, i18n } = useTranslation();
  const imagebyLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/suggestions.png";
      case "en":
        return "/img/suggestions-eng.png";
      case "ru":
        return "/img/suggestions-rus.png";
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    order: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((form) => ({
      ...form,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
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
        alt="suggestion"
        className={`ml-[4%] mt-[16px] h-[35px] ${
          scrollY >= 103 ? "mt-[127px]" : ""
        }`}
      />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="max-w-[1140px] py-[15px]">
            <div className="flex gap-5">
              <OutlinedInput
                type="text"
                label="Ad"
                id="Ad"
                onChange={handleChange}
              />
              <OutlinedInput
                type="text"
                label="Soyad"
                id="Soyad"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5">
              <OutlinedInput
                type="email"
                label="Elektron poçt"
                id="Elektron poçt"
                onChange={handleChange}
              />
              <OutlinedInput type="tel" label="MOBİL nömrə" id="MOBİL nömrə" />
            </div>
            <div className="flex gap-5">
              <div>
                <OutlinedInput
                  type="text"
                  label="SİFARİŞ NÖMRƏSİ"
                  id="SİFARİŞ NÖMRƏSİ"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="transition-colors flex items-center gap-2 transition-shadow transition-border duration-300 ease-in-out px-[6px] py-[10px] mt-4 font-bold cursor-pointer"
                  style={{
                    backgroundColor: "rgb(0, 120, 172)",
                    backgroundImage:
                      "linear-gradient(rgb(84, 165, 199), rgb(0, 120, 172))",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "20px",
                    fontFamily: "Bold",
                  }}
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
                  <span>{t("Mesaj Göndərin")}</span>
                </button>
              </div>
              <div className="relative mt-6">
                <textarea
                  className="peer w-[547px] h-[137px] py-[18.5px] px-[14px] border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-500"
                  id="message"
                  onChange={handleChange}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-2 bg-white px-1 text-sm font-bold peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-blue-700 transition-all"
                >
                  {t("SİZİN MESAJINIZ")}
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Suggestions;
