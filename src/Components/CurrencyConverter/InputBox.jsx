import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-black p-4 rounded-lg flex justify-between items-center ${className} border border-neonBlue`}>
      <div className="w-1/2 mr-2">
        <label htmlFor={amountInputId} className="block text-neonBlue mb-1">
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-black text-neonBlue placeholder-neonBlue outline-none py-2 border-b border-neonBlue focus:border-neonGreen transition-all"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2">
        <label className="block text-neonBlue mb-1 text-right">
          Currency
        </label>
        <select
          className="w-full bg-black text-neonBlue rounded py-2 px-1 border border-neonBlue focus:border-neonGreen transition-all cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
