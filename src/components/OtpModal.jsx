import React, { useState, useRef } from "react";

const OTPModal = ({ phoneNumber, onClose, onVerify }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4);
    if (/^[0-9]{4}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      setError("");
      inputRefs.current[3]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 4) {
      setError("4 rəqəmli kodu tam daxil edin");
      return;
    }
    onVerify(otpCode);
  };

  const handleResendCode = () => {
    console.log("Kod yenidən göndərildi");
    setOtp(["", "", "", ""]);
    setError("");
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-semibold text-black">MOBİL NÖMRƏNİZİ TƏSDİQ EDİN</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-4 text-center">
            +994 {phoneNumber} nömrəsinə göndərilən kodu daxil edin
          </p>
          
          <div className="w-full">
            <div className="flex flex-col items-center mb-4">
              <div className="mb-4 flex justify-between gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="w-[20%] h-12 rounded border border-gray-300 outline-none px-4 text-black text-center text-lg tracking-widest"
                    maxLength="1"
                  />
                ))}
              </div>
              {error && (
                <span className="text-red-500 text-xs mt-1 block text-center">
                  {error}
                </span>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#0078ac] hover:bg-[#0968b] text-white py-3 rounded font-medium mb-2 cursor-pointer"
            >
              TƏSDİQ ET
            </button>
            
            <div className="w-full flex flex-col justify-center items-center gap-1">
              <p className="font-[sans-serif] text-sm font-normal text-gray-300">Kodu almamısınız?</p>
              <button 
                className="text-[#0078ac] border-none outline-none bg-transparent text-xs font-semibold font-[sans-serif] cursor-pointer" 
                onClick={handleResendCode}
              >
                Kodu yenidən göndər
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;