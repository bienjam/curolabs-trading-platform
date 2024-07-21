import { Separator } from '@/components/ui/separator';
import { NavLink } from 'react-router-dom';
import CurrentPrices from '../CurrentPrices/CurrentPrices';
import AccountInfo from './AccountInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';

const OrderEntryPanel = () => {
    const [accountDetails, setAccountDetails] = useState({});

    const fetchAccountDetails = async () => {
      const response = await fetch('http://13.41.72.245/account_details');
      const accountDetails = await response.json();

      console.log(accountDetails)
      setAccountDetails(accountDetails);
    };

    useEffect(() => {
      fetchAccountDetails();
    }, []);

  return (
    <>
        <div>
            <div className="bg-primary w-[402px]">
                <div className="flex divide-x-[3px] divide-[#252223] h-full w-full">
                    <div className="w-[360px] divide-y-[3px] divide-[#252223]">
                        <CurrentPrices style={{width: "100%"}}/>
                        <div className='w-[360px] h-[697px] p-6'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <span className='text-[16px]'>Limit</span>
                                    <span className='text-[16px] text-[#898587]'>Market</span>
                                </div>
                                <span className='text-[#E74694] text-[12px]'>Calculator</span>
                            </div>
                            <Tabs defaultValue="lots" className='py-6'>
                                <TabsList className="rounded-lg h-[30px] w-full overflow-hidden gap-0 p-0 bg-[#252223]">
                                    <TabsTrigger value="lots" className="flex w-full items-center justify-center text-[12px] rounded-none px-4 border-none data-[state=active]:bg-[#4F494C] text-[#898587] data-[state=active]:text-white">
                                        <span>Open by Lots</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="sl" className="flex w-full items-center justify-center text-[12px] rounded-none px-4 border-none data-[state=active]:bg-[#4F494C] text-[#898587] data-[state=active]:text-white">
                                        <span>Open by SL</span>
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="lots">
                                    <div className="py-3">
                                        <span className='text-[12px]'>Limit Price</span>
                                        <div className='flex overflow-hidden mt-2 rounded-md border border-[#2F2C2D]'>
                                            <Button className="h-[42px] w-[56px] bg-[#1A1819] border-none rounded-none">
                                                <img src="./svg/minus-outline.svg" alt="minus icon" />
                                            </Button>
                                            <Input className="text-center bg-[#1A1819]" value="0.00"/>
                                            <Button className="h-[42px] w-[56px] bg-[#1A1819] border-none rounded-none">
                                                <img src="./svg/plus-outline.svg" alt="minus icon" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <div className="flex justify-between items-center">
                                            <span className='text-[12px]'>Quantity</span>
                                            <span className='text-[12px]'>$199,287.50</span>
                                        </div>
                                        <div className='flex overflow-hidden mt-2 rounded-md border border-[#2F2C2D]'>
                                            <Button className="h-[42px] w-[56px] bg-[#1A1819] border-none rounded-none">
                                                <img src="./svg/minus-outline.svg" alt="minus icon" />
                                            </Button>
                                            <Input className="text-center bg-[#1A1819]" value="0.00"/>
                                            <Button className="h-[42px] w-[56px] bg-[#1A1819] border-none rounded-none">
                                                <img src="./svg/plus-outline.svg" alt="minus icon" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="py-3 space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="addSetTP"/>
                                            <label
                                                htmlFor="addSetTP"
                                                className="text-[12px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                            Add Set TP
                                            </label>
                                            <span className='text-[12px] text-[#898587]'>(Optional)</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="addSetTP"/>
                                            <label
                                                htmlFor="addTP"
                                                className="text-[12px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                            Add TP
                                            </label>
                                            <span className='text-[12px] text-[#898587]'>(Optional)</span>
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <div className="flex bg-[#252223] w-[312px] h-[40px] rounded-md items-center">
                                            <div className="flex-1 flex justify-center items-center">
                                                <span className='text-[12px] text-[#0E9F6E]'>1.06915</span>
                                            </div>
                                            <Separator orientation="vertical" className="h-[21px] bg-[#2F2C2D]" />
                                            <div className="flex-1 flex justify-center items-center">
                                                <span className='text-[12px] text-[#F05252]'>1.06915</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <Button variant="primary" className="h-[41px] w-[152px]">Buy / Long</Button>
                                            <Button variant="secondary" className="h-[41px] w-[152px]">Sell / Short</Button>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                        <AccountInfo data={accountDetails}/>
                    </div>
                    <div className="w-[40px] flex justify-center">
                        <nav className='flex flex-col items-center py-1 px-1 w-full'>

                            <NavLink to="/" className="w-full py-2 my-[3px] rounded-md flex items-center justify-center" style={({ isActive }) => {
                                return {
                                        backgroundColor: isActive ? "#252223" : "",
                                    };
                                }}>
                                <img src="./svg/white-chart.svg" alt="chart icon"/>
                            </NavLink>
                            <NavLink to="/book" className="w-full py-2 my-[3px] rounded-md flex items-center justify-center" style={({ isActive }) => {
                                return {
                                        backgroundColor: isActive ? "#252223" : "",
                                    };
                                }}>
                                <img src="./svg/book.svg" alt="chart icon"/>
                            </NavLink>
                            <Separator className="w-[20px] bg-[#2F2C2D]" />
                            <NavLink to="/calendar" className="w-full py-2 my-[3px] rounded-md flex items-center justify-center" style={({ isActive }) => {
                                return {
                                        backgroundColor: isActive ? "#252223" : "",
                                    };
                                }}>
                                <img src="./svg/calendar-month.svg" alt="chart icon"/>
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OrderEntryPanel
