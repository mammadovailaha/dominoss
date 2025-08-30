import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "./InputField";

const registrationSchema = yup.object().shape({
  firstName: yup.string().required("Ad mütləqdir"),
  lastName: yup.string(),
  birthDate: yup.string().required("Doğum tarixi mütləqdir"),
  gender: yup.string().required("Cins seçin"),
});

const RegistrationModal = ({ phoneNumber, onClose, onSubmit }) => {
  const genderOptions = [
    { value: "male", label: "Kişi" },
    { value: "female", label: "Qadın" },
  ];

  return (
    <div className="w-full fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-[90%] md:w-[55%] max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 ">
          <h2 className="text-2xl font-bold text-black text-center w-full">QEYDİYYAT</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              birthDate: "",
              gender: "",
            }}
            validationSchema={registrationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit }) => (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1 absolute z-10 bg-white  w-[35px] left-[7%] top-[-5%] px-1 ">
                      AD *
                    </label>
                    <InputField
                      name="firstName"
                      type="text"
                      placeholder=""
                      inputClassName="text-black"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1 absolute z-10 bg-white  w-[65px] left-[7%] top-[-5%] px-1 ">
                      SOYAD
                    </label>
                    <InputField
                      name="lastName"
                      type="text"
                      placeholder=""
                      inputClassName="text-black"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                  <div className="mb-4 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1 absolute z-10 bg-white  w-[95px] left-[7%] top-[-5%] px-1 ">
                      MOBİL NÖMRƏ
                    </label>
                    {/* <input
                      type="text"
                      value={`+994 ${phoneNumber}`}
                      disabled
                      className="w-[90%] lg:w-[70%] h-12 md:h-14 rounded-[3px] border border-[#ffff] outline-none pl-4 bg-gray-100 text-gray-600 mx-auto block"
                    /> */}
                    <InputField
                      name="phone"
                      type="text"
                      placeholder={`+994 ${phoneNumber}`}
                      inputClassName="text-black  cursor-not-allowed"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1 absolute z-10 bg-white  w-[120px] left-[7%] top-[-5%] px-1 ">
                      DOĞUM TARİXI *
                    </label>
                    <InputField
                      name="birthDate"
                      type="date"
                      inputClassName="text-black"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="mb-6 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1 absolute z-10 bg-white  w-[70px] left-[7%] top-[-5%] px-1 ">
                      CİNS *
                    </label>
                    <InputField
                      name="gender"
                      type="select"
                      placeholder="Cins seçin"
                      options={genderOptions}
                      inputClassName="text-black"
                    />
                  </div>

                  <button
                    onClick={() => handleSubmit()}
                    className="w-full h-[57.6px] bg-[#0078ac] hover:bg-[#0968b] text-white py-2 rounded font-medium crursor-pointer outline-none text-lg tracking-wider "
                  >
                    İNDİ QEYDİYYATDAN KEÇ
                  </button>
                </div>

              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;