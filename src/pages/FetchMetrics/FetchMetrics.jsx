import AreaChartComponent from "./AreaChart"
import Header from "./Header"
import { useEffect, useState } from "react"

const FetchMetrics = () => {
  const [dailySummary, setDailySummary] = useState([])
  const [metrics, setMetrics] = useState([])

  const fetchMetrics = async() => {
      const response = await fetch('http://13.41.72.245/fetch_metrics');
      const metrics = await response.json();

      console.log(metrics)
      setMetrics(metrics)
      setDailySummary(metrics.daily_summary)
  }

  useEffect(() => {
      fetchMetrics()
  }, [])

  return (
    <>
        <div className="container px-0 space-y-3">
            <Header data={metrics}/>
            <AreaChartComponent data={dailySummary}/>
        </div>
    </>
  )
}

export default FetchMetrics
