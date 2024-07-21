import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { useEffect, useRef, useState } from "react";

const AccountInfo = ({data}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const ref = useRef();

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        if(!data){
            setDropdownOpen(true)
        }
    }, [])


    const accountId = data?.account_id;
    const accountName = data?.account_name;
    const autoBeLevel = data?.auto_be_level;
    const balance = data?.balance;
    const commissions = data?.commissions;
    const dailyLossLimit = data?.daily_loss_limit;
    const equity = data?.equity;
    const exchange = data?.exchange;
    const leverage = data?.leverage;
    const maxLotSizes = data?.max_lot_sizes;
    const oneClick = data?.one_click;
    const risk = data?.risk;
    const showLeaderboard = data?.show_leaderboard;
    const startingBalance = data?.starting_balance;
    const status = data?.status;
    const symbolMappings = data?.symbol_mappings;
    const takeProfitLevel = data?.take_profit_level;

  return (
    <div>
        <div className={`w-[360px] bg-[#100E0F] p-6 ${!dropdownOpen ? "h-[169px]" : "h-[511px]"}`}>
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h4 className="text-[16px]">Account Info</h4>
                    <img src="./svg/eye-outline.svg" alt="eye icon" />
                </div>
                <div className="flex items-center gap-3">
                    <img src="./svg/settings.svg" alt="settings icon" />
                    <Separator  orientation="vertical" className="h-[21px] bg-[#2F2C2D]" />
                    <img src={`./svg/${dropdownOpen ? "minus-outline.svg" : "arrow-up.svg"}`} alt="minus icon"  onClick={toggleDropdown} className="cursor-pointer" />
                </div>
            </header>
            <div>
                <div className="py-4 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <span className="text-[#898587] text-[12px]">Name:</span>
                        <span className="text-[12px]">{accountName || "Second Account"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[#898587] text-[12px]">Balance:</span>
                        <span className="text-[12px]">${balance || "199,027.50"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[#898587] text-[12px]">Equity:</span>
                        <span className="text-[12px]">${equity || "99,027.50"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[#898587] text-[12px]">Exchange:</span>
                        <div className="flex items-center gap-2">
                            <img src="./images/avatar.png" alt="avatar image" className="w-[16px] h-[16px] aspect-square"/>
                            <span className="text-[12px]">Binance</span>
                        </div>
                    </div>
                </div>
                {dropdownOpen && (
                <div ref={ref}>
                    <Separator className="bg-[#2F2C2D]" />
                    <div className="py-3.5 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-[#898587] text-[12px]">Leverage:</span>
                            <span className="text-[12px]">{leverage || "100"}x</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <img src="./svg/info-outline.svg" alt="info icon" />
                                <span className="text-[#898587] text-[12px] leading-[1.4]">Risk:</span>
                            </div>
                            <span className="text-[12px]">{risk || "1"}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <img src="./svg/info-outline.svg" alt="info icon" />
                                <span className="text-[#898587] text-[12px] leading-[1.4]">Daily Loss Limit:</span>
                            </div>
                            <span className="text-[12px]">{dailyLossLimit || "100"}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <img src="./svg/info-outline.svg" alt="info icon" />
                                <span className="text-[#898587] text-[12px] leading-[1.4]">Take Profit (RR):</span>
                            </div>
                            <span className="text-[12px]">{takeProfitLevel || "3"}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <img src="./svg/info-outline.svg" alt="info icon" />
                                <span className="text-[#898587] text-[12px] leading-[1.4]">Auto BE Level (RR):</span>
                            </div>
                            <span className="text-[12px]">{autoBeLevel || "3"}</span>
                        </div>
                    </div>
                    <Separator className="bg-[#2F2C2D]" />
                    <div className="py-3.5 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-[#898587] text-[12px]">One Click Trade</span>
                            <Switch checked={true}/>
                        </div>
                    </div>
                    <Separator className="bg-[#2F2C2D]" />
                    <div className="py-3.5 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-[#898587] text-[12px]">Show Account on Leaderboard:</span>
                            <Switch checked={true}/>
                        </div>
                    </div>
                    <Separator className="bg-[#2F2C2D]" />
                    <div className="py-3.5 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-[#898587] text-[12px]">Max Lot Sizes:</span>
                            <Button variant="iconSecondary" className="p-[3px] h-[20px] w-[20px] relative">
                                <img src="./svg/pink-plus.svg" alt="edit icon" className="w-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                            </Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[#898587] text-[12px] leading-[1.4]">Account Commissions:</span>
                            <div className="flex items-center gap-1.5">
                                <div className="bg-[#252223] h-[20px] w-[62px] flex items-center justify-center gap-1 rounded-md">
                                    <span className="text-[#E74694] text-[12px] leading-[1.4]">3</span>
                                    <span className="text-[12px] leading-[1.4]">Rules</span>
                                </div>
                                <Button variant="icon" className="p-[3px] h-[20px] w-[20px] flex items-center justify-center">
                                    <img src="./svg/edit.svg" alt="edit icon" className="w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[#898587] text-[12px] leading-[1.4]">Symbol Mappings:</span>
                            <div className="flex items-center gap-1.5">
                                <div className="bg-[#252223] h-[20px] w-[62px] flex items-center justify-center gap-1 rounded-md">
                                    <span className="text-[#E74694] text-[12px] leading-[1.4]">3</span>
                                    <span className="text-[12px] leading-[1.4]">Rules</span>
                                </div>
                                <Button variant="icon" className="p-[3px] h-[20px] w-[20px] flex items-center justify-center">
                                    <img src="./svg/edit.svg" alt="edit icon" className="w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default AccountInfo
