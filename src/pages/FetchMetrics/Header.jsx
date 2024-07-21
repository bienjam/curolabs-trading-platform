import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { changeColor } from "@/lib/helper";
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator";

const Header = ({data}) => {

  const accountId = data?.account_id;
  const averageLoss = data?.average_loss;
  const averagePl = data?.average_pl;
  const averageProfit = data?.average_profit;
  const balance = data?.balance;
  const dailyDd = data?.daily_dd;
  const equity = data?.equity;
  const losingDays = data?.losing_days;
  const losingTrades = data?.losing_trades;
  const maxDailyDd = data?.max_daily_dd;
  const maxDd = data?.max_dd;
  const maxLoss = data?.max_loss;
  const maxWin = data?.max_win;
  const minTradingDays = data?.min_trading_days;
  const netPl = data?.net_pl;
  const profitFactor = data?.profit_factor;
  const profitTarget = data?.profit_target;
  const startingBalance = data?.starting_balance;
  const status = data?.status;
  const totalDd = data?.total_dd;
  const totalFees = data?.total_fees;
  const totalTrades = data?.total_trades;
  const tradeExpectancy = data?.trade_expectancy;
  const tradingDays = data?.trading_days;
  const winRate = data?.win_rate;
  const winningDays = data?.winning_days;
  const winningTrades = data?.winning_trades;

  return (
    <>
      <div className="bg-primary p-4 space-y-4">
        <div className="flex justify-between items-center">

          <div className="flex items-center">
            <div className="mr-4 flex gap-2">
              <img src="./images/avatar.png" alt="avatar" className="w-[40px] h-[40px] aspect-square"/>
              <div>
                 <h3 className="text-[18px]">Secondary Account</h3>
                 <p className="text-[12px] text-[#898587]">Account Id: {accountId}</p>
              </div>
            </div>
            <Separator  orientation="vertical" className="h-[32px] bg-[#2F2C2D]" />
            <div className="px-4 flex items-center gap-5">
              <div>
                <p className="text-[12px] text-[#898587]">Trading Days</p>
                <p className="text-[14px]">{tradingDays}</p>
              </div>
              <div>
                <p className="text-[12px] text-[#898587]">Daily DD</p>
                <p className="text-[14px]">{dailyDd}</p>
              </div>
              <div>
                <p className="text-[12px] text-[#898587]">Max Daily DD</p>
                <p className={`text-[14px] text-${changeColor(maxDailyDd)}`}>{maxDailyDd}%</p>
              </div>
              <div>
                <p className="text-[12px] text-[#898587]">Max DD</p>
                <p className={`text-[14px] text-${changeColor(maxDd)}`}>{maxDd}%</p>
              </div>
              <div>
                <p className="text-[12px] text-[#898587]">Profit Target</p>
                <p className={`text-[14px] text-${changeColor(profitTarget)}`}>{profitTarget}%</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="This month" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">This week</SelectItem>
                  <SelectItem value="banana">This month</SelectItem>
                  <SelectItem value="blueberry">This year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="tertiary" className="py-2 flex gap-2 items-center">
              <img src="./svg/plus.svg" alt="plus icon" />
              <span className="leading-[1.4]">Import Trades</span>
            </Button>
            <Button variant="tertiary" className="py-2 flex gap-2 items-center">
              <img src="./svg/rotate-outline.svg" alt="rotate-outline icon" />
              <span className="leading-[1.4]">Update Objectives</span>
            </Button>
          </div>

        </div>

        <div className="flex gap-6">

          <div className="bg-[#151314] rounded-lg flex items-start p-6 gap-2 flex-1">
            <img src="./svg/balance.svg" alt="balance icon" />
            <div>
              <p className="text-[14px] text-[#898587] leading-6">Balance</p>
              <span className="text-[18px]">${balance} </span>
              <span className="text-[14px] text-[#F05252]">(9.85%)</span>
            </div>
          </div>
          <div className="bg-[#151314] rounded-lg flex items-start p-6 gap-2 flex-1">
            <img src="./svg/balance.svg" alt="balance icon" />
            <div>
              <p className="text-[14px] text-[#898587] leading-6">Net P&L</p>
              <span className="text-[18px]">${netPl} </span>
              <span className={`text-[14px] text-${changeColor(averagePl)}`}>({averagePl}%)</span>
            </div>
          </div>
          <div className="bg-[#151314] rounded-lg flex items-start p-6 gap-2 flex-1">
            <img src="./svg/balance.svg" alt="balance icon" />
            <div>
              <p className="text-[14px] text-[#898587] leading-6">Equity</p>
              <span className="text-[18px]">${equity} </span>
              <span className="text-[14px] text-[#F05252]">(9.85%)</span>
            </div>
          </div>
          <div className="bg-[#151314] rounded-lg flex items-start p-6 gap-2 flex-1">
            <img src="./svg/balance.svg" alt="balance icon" />
            <div className="w-full">
              <p className="text-[14px] text-[#898587] leading-6">Avg Win / Loss</p>
              <Progress value={averageProfit} />
              <div className="flex justify-between mt-1">
                <span className={`text-[12px] text-${changeColor(averageProfit)}`}>${averageProfit}</span>
                <span className={`text-[12px] text-${changeColor(averageLoss)}`}>{averageLoss}%</span>
              </div>
            </div>
          </div>
          <div className="bg-[#151314] rounded-lg flex p-6 flex-1 items-center divide-x-2 divide-[#2F2C2D]">
            <div className="flex-1 flex flex-col items-center justify-center h-[21px]">
              <p className="text-[14px] text-[#898587] leading-6">Win Rate</p>
              <span className={`text-[18px] text-${changeColor(winRate)}`}>{winRate}%</span>
            </div>
            <div className="flex-1 px-1 flex flex-col items-center justify-center h-[21px]">
              <p className="text-[14px] text-[#898587] leading-6">Profit Factor</p>
              <span className="text-[18px]">{profitFactor}</span>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Header
