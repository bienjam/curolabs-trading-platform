import OpenPositions from "./pages/OpenPositions/OpenPositions";
import FetchMetrics from "./pages/FetchMetrics/FetchMetrics";
import OrderEntryPanel from "./pages/AccountDetails/OrderEntryPanel";
import CurrentPrices from "./pages/CurrentPrices/CurrentPrices";
import AccountInfo from "./pages/AccountDetails/AccountInfo";

function App() {

  return (
    <div className="py-[5rem] min-h-screen bg-[#252223] text-white space-y-[3rem]">
      <OpenPositions/>
      <FetchMetrics/>
      <div className="flex justify-between container">
        <OrderEntryPanel/>
        <AccountInfo/>
        <CurrentPrices/>
      </div>
    </div>
  )
}

export default App
