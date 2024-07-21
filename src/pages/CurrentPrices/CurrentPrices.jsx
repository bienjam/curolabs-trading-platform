import { changeColor } from "@/lib/helper";
import { useEffect, useRef, useState } from "react";

const CurrentPrices = () => {
  const [currentPrices, setCurrentPrices] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const ref = useRef();

  const fetchPrices = async () => {
    const response = await fetch('http://13.41.72.245/current_prices');
    const current_prices = await response.json();

    const prices = current_prices.prices[0];
    setCurrentPrices(prices);
    const firstItem = Object.keys(prices)[0];
    setSelectedItem(firstItem);
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  const currencyFlags = {
    "EUR": "./images/europe.png",
    "USD": "./images/us.png",
    "AUD": "./images/australia.png",
    "GBP": "./images/uk.png",
    "NZD": "./images/nz.png",
    "CAD": "./images/canada.png",
    "CHF": "./images/switzerland.png",
    "JPY": "./images/japan.png",
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  // const handleClickOutside = (event) => {
  //   if (ref.current && !ref.current.contains(event.target)) {
  //     setDropdownOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const handleSelectItem = (price) => {
    setSelectedItem(price);
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="w-[360px]">
        <button onClick={toggleDropdown} className="w-full bg-[#100E0F] h-[64px] px-6 relative">
          {selectedItem ? (
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={currencyFlags[selectedItem.slice(0, 3)]}
                  alt={`${selectedItem.slice(0, 3)} flag`}
                  className="rounded-full w-[24px] h-[24px]"
                />
                <img
                  src={currencyFlags[selectedItem.slice(3, 6)]}
                  alt={`${selectedItem.slice(3, 6)} flag`}
                  className="rounded-full ml-[-8px] w-[24px] h-[24px]"
                />
                <span className="ml-2 text-[16px]">{selectedItem}</span>
              </div>
              <div className="flex items-center">
                <span className={`ml-auto mr-3 text-[16px] text-${changeColor(currentPrices[selectedItem])}`}>
                  {currentPrices[selectedItem]}
                </span>
                <img src={`./svg/${dropdownOpen ? "arrow-up.svg" : "arrow-down.svg"}`} alt="arrow down icon" />
              </div>
            </div>
          ) : (
            'Select'
          )}
        </button>
        {dropdownOpen && (
          <div ref={ref} className="dropdown-content bg-[#161314] py-4 px-2 rounded-md border border-[#2B2B2B]">
            {Object.keys(currentPrices).map((price, index) => {
              const baseCurrency = price.slice(0, 3);
              const quoteCurrency = price.slice(3, 6);

              const baseCurrencyImg = currencyFlags[baseCurrency];
              const quoteCurrencyImg = currencyFlags[quoteCurrency];

              return (
                <div
                  key={index}
                  className="dropdown-item flex justify-between items-center py-1 rounded-sm cursor-pointer px-2 hover:bg-[#252223]"
                  onClick={() => handleSelectItem(price)}
                >
                  <div className="flex items-center">
                    <img src={baseCurrencyImg} alt={`${baseCurrency} flag`} className="rounded-full w-[24px] h-[24px]" />
                    <img src={quoteCurrencyImg} alt={`${quoteCurrency} flag`} className="rounded-full ml-[-8px] w-[24px] h-[24px]" />
                    <span className="ml-2 text-[16px]">{price}</span>
                  </div>
                  <span className={`ml-auto text-[16px] text-${changeColor(currentPrices[price])}`}>
                    {currentPrices[price]}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentPrices;
