import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
const strictEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const emailField = yup
  .string()
  .required("Email ünvanı daxil edilməlidir")
  .min(6, "Minimum 6 simvol olmalıdır")
  .max(254, "Maksimum 254 simvol olmalıdır")
  .matches(strictEmailRegex, "Email ünvanının düzgünlüyünü yoxlayın")
  .test("no-space", "Email ünvanının düzgünlüyünü yoxlayın", (value) =>
    value ? !/\s/.test(value) : true
  );
  export const nameSchema = yup
  .string()
  .required("Ad Soyad daxil edilməlidir")
  .matches(/^[A-Za-zƏəÖöÜüÇçĞğİıŞş\s-]+$/, "Yalnız hərflər və boşluq")
  .min(2, "Ad və soyad minimum 2 simvol olmalıdır")
  .max(50, "Ad və soyad maksimum 50 simvol olmalıdır");


export const phoneSchema = yup
  .string()
  .required("Telefon nömrəsi mütləqdir")
  .test(
    "is-valid-phone",
    "Telefon nömrəsi düzgün formatda olmalıdır",
    (value) => {
      if (!value) return false;
      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber ? phoneNumber.isValid() : false;
    }
  );
