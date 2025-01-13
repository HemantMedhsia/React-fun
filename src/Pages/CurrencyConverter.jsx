import React, { useState, useEffect } from "react";
import InputBox from "../Components/CurrencyConverter/InputBox";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";
import ParticlesLoader from "../Components/ParticlesLoader";
import ParticlesConfig from "../Components/ParticlesConfig";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const rates = useCurrencyInfo(fromCurrency);
  const options = rates ? Object.keys(rates) : [];

  const handleConvert = (e) => {
    e.preventDefault();
    if (!rates) return;
    const rate = rates[toCurrency];
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
    } else {
      setConvertedAmount(0);
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    // Reset conversion if needed.
    if (rates && rates[toCurrency]) {
      setConvertedAmount(0);
    }
  };

  useEffect(() => {
    if (!rates) return;
    const rate = rates[toCurrency];
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [rates, amount, toCurrency]);

  const options1 = ParticlesConfig();

  return (
    <div className="absolute w-full time backdrop-blur-lg bg-neonBlue/10 h-full flex justify-center items-center">
    <ParticlesLoader options={options1} id="particles-2" />
      <div
        className="w-full flex justify-center items-center "
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/1600x900?night,neon')`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="w-full max-w-md mx-auto p-5 bg-black border border-neonBlue rounded-lg shadow-lg">
          <form onSubmit={handleConvert} className="space-y-6">
            {/* Input for source currency */}
            <InputBox
              label="From"
              currencyOptions={options}
              amount={amount}
              selectCurrency={fromCurrency}
              onAmountChange={(amt) => setAmount(amt)}
              onCurrencyChange={(currency) => setFromCurrency(currency)}
            />

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSwap}
                className="border-2 border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-black transition-all px-4 py-2 rounded-lg shadow-neon"
              >
                Swap
              </button>
            </div>

            {/* Input for target currency */}
            <InputBox
              label="To"
              currencyOptions={options}
              amount={convertedAmount}
              selectCurrency={toCurrency}
              onAmountChange={(amt) => setConvertedAmount(amt)}
              onCurrencyChange={(currency) => setToCurrency(currency)}
              // Disable editing of the converted value.
              amountDisable={true}
            />

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-neonBlue text-black px-4 py-3 rounded-lg hover:brightness-125 transition-all shadow-neon"
            >
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
