import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { changeColor, formatCurrency } from "@/lib/helper"
import { Separator } from "@/components/ui/separator"

const OpenPositions = () => {
    const [openPositions, setOpenPositions] = useState([])

    const fetchPositions = async() => {
        const response = await fetch('http://13.41.72.245/open_positions');
        const positions = await response.json();

        setOpenPositions(positions.open_trades)
    }

    useEffect(() => {
        fetchPositions()

    }, [])

    const length = openPositions?.length;

    return openPositions && (
        <>
        <div className="container bg-primary px-0">
            <Tabs defaultValue="open_positions">
                <div className="px-4 pt-4 flex justify-between items-center">
                     <TabsList>
                        <TabsTrigger value="open_positions" className="flex gap-2">
                            <span>Open Positions</span>
                            <Badge variant="secondary">{length}</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="open_orders" className="flex gap-2">
                            <span>Open Orders</span>
                            <Badge variant="secondary">{length}</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="open_history" className="flex gap-2">
                            <span>Open History</span>
                            <Badge variant="secondary">{length}</Badge>
                        </TabsTrigger>
                    </TabsList>
                    <div className="flex items-center">
                        <div className="flex gap-3 px-4">
                            <Button variant="outlineGreen">Sync Open Trades</Button>
                            <Button variant="outlineGreen">Close Profits</Button>
                            <Button variant="outlineRed">Close Losses</Button>
                            <Button variant="outlineRed">Close All</Button>
                        </div>
                        <Separator  orientation="vertical" className="h-[21px] bg-[#2F2C2D]" />
                        <div className="pl-4 flex items-center">
                            <img src="./svg/minus-outline.svg" alt="minus-outline icon" className="w-4"/>
                        </div>
                    </div>
                </div>


                <TabsContent value="open_positions">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#151314] border-b-2 border-[#2F2C2D]">
                                <TableHead>OPEN (GMT)</TableHead>
                                <TableHead>SYMBOL</TableHead>
                                <TableHead>POSITION</TableHead>
                                <TableHead>ENTRY</TableHead>
                                <TableHead>SIZE</TableHead>
                                <TableHead>TP</TableHead>
                                <TableHead>SL</TableHead>
                                <TableHead>FEES</TableHead>
                                <TableHead>ROI</TableHead>
                                <TableHead>P/L</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                          {openPositions?.map((position, index) => {
                            const position_type = position?.position_type;
                            const entry = position?.entry;
                            const fees = position?.fees;
                            const open_time = position?.open_time.split(" ");
                            const pl = position?.pl;
                            const quantity = position?.quantity;
                            const roi = position?.roi;
                            const sl = position?.sl;
                            const symbol = position?.symbol;
                            const tp = position?.tp;

                            return (
                            <TableRow key={index} className="border-b-2 border-[#2F2C2D]">
                                <TableCell className="font-medium">
                                    <p>{open_time[0]}</p>
                                    <p className="text-[#898587]">{open_time[1]}</p>
                                </TableCell>
                                <TableCell>
                                    {!symbol ?
                                        <span className="text-[#898587]">-</span> :
                                        <span>{symbol}</span>
                                    }
                                </TableCell>
                                <TableCell className="uppercase">
                                    {!position_type ?
                                        <span className="text-[#898587]">-</span> :
                                        <span
                                            className={`text-${changeColor(position_type)}`}>{position_type}</span>
                                    }
                                </TableCell>
                                <TableCell>
                                    {!entry ?
                                        <span className="text-[#898587]">-</span> :
                                        <span>{entry}</span>
                                    }
                                </TableCell>
                                <TableCell>
                                    {!quantity ?
                                        <span className="text-[#898587]">-</span> :
                                        <span>{quantity}</span>
                                    }
                                </TableCell>
                                <TableCell>
                                    {!tp ?
                                        <span className="text-[#898587]">-</span> :
                                        <span>{tp}</span>
                                    }
                                </TableCell>
                                <TableCell>
                                    {!sl ?
                                        <span className="text-[#898587]">-</span> :
                                        <span>{sl}</span>
                                    }
                                </TableCell>
                                <TableCell>
                                    {!fees ?
                                        <span className="text-[#898587]">-</span> :
                                        <span>{formatCurrency(fees)}</span>
                                    }
                                </TableCell>
                                <TableCell>
                                    {!roi ?
                                        <span className="text-[#898587]">-</span> :
                                        <span className={`text-${changeColor(roi)}`}>{roi}%</span>
                                    }</TableCell>
                                <TableCell>
                                    {!pl ?
                                        <span className="text-[#898587]">-</span> :
                                        <span className={`text-${changeColor(pl)}`}>{formatCurrency(pl)}</span>
                                    }
                                </TableCell>

                                <TableCell className="text-right">
                                    <div className="flex gap-3 justify-end">
                                        <Button variant="icon" className="p-1.5 h-[28px] w-[28px] flex items-center justify-center">
                                          <img src="./svg/edit.svg" alt="edit icon" className="w-4" />
                                        </Button>
                                        <Button variant="icon" className="p-1.5 h-[28px] w-[28px] flex items-center justify-center">
                                          <img src="./svg/camera.svg" alt="edit icon" className="w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            )
                          })}

                        </TableBody>
                    </Table>
                </TabsContent>

                <TabsContent value="open_orders" className="p-4">
                    component2
                </TabsContent>
                <TabsContent value="open_history" className="p-4">
                    component3
                </TabsContent>
            </Tabs>

            </div>
        </>
    )
}

export default OpenPositions
