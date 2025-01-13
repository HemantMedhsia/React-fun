import React, { useCallback, useEffect, useState, useRef } from "react";
import "./style.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$";

    let characters = "";
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(generatedPassword);
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  useEffect(() => {
    generatePassword();
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    generatePassword,
  ]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className=" absolute backdrop-blur-xl w-full max-w-2xl mx-auto shadow-lg rounded-lg px-8 lg:px-20 py-8 bg-gray-900/20 hover:shadow-neon duration-300 text-teal-400">
      <h1 className="text-2xl text-center font-extrabold mb-6">
        Password Generator
      </h1>
      <div className="flex items-center shadow rounded-lg overflow-hidden my-4 transition-all duration-300 hover:shadow-neon">
        <input
          type="text"
          value={password}
          className="w-full bg-gray-800 text-teal-400 px-3 py-2 outline-none"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className="bg-teal-400 sm: text-lg w-1/2 font-bold text-gray-900 px-1 py-2 transition-all duration-300 hover:bg-teal-300"
        >
          Copy
        </button>
      </div>
      <div className="flex flex-col gap-y-4 text-lg">
        <div className="flex flex-col">
          <label className="mb-1">Length: {length}</label>
          <input
            type="range"
            min="4"
            max="500"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>
        {/* Updated Checkbox Components */}
        <div className="flex items-center gap-2">
          <label className="flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-slate-400 checked:bg-teal-400 checked:border-teal-400"
            />
            <span className="absolute text-gray-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label className="cursor-pointer text-sm">Include Uppercase</label>
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-slate-400 checked:bg-teal-400 checked:border-teal-400"
            />
            <span className="absolute text-gray-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label className="cursor-pointer text-sm">Include Lowercase</label>
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-slate-400 checked:bg-teal-400 checked:border-teal-400"
            />
            <span className="absolute text-gray-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label className="cursor-pointer text-sm">Include Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-slate-400 checked:bg-teal-400 checked:border-teal-400"
            />
            <span className="absolute text-gray-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label className="cursor-pointer text-sm">Include Symbols</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
