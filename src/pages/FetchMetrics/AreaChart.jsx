import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const chartConfig = {
  total_profit: {
    label: "Balance",
    color: "#B93876",
  },
}

const AreaChartComponent = ({data}) => {

  return (
    <Card className="bg-[#151314] border-none rounded-none">
      <Tabs defaultValue="balance">
        <CardHeader className="flex items-center flex-row">
            <TabsList className="rounded-lg overflow-hidden gap-0 p-0 bg-[#252223]">
                <TabsTrigger value="balance" className="flex items-center justify-center text-[14px] rounded-none px-4 border-none data-[state=active]:bg-[#4F494C] text-[#898587] data-[state=active]:text-white">
                    <span>Balance</span>
                </TabsTrigger>
                <TabsTrigger value="daily" className="flex items-center justify-center text-[14px] rounded-none px-4 border-none data-[state=active]:bg-[#4F494C] text-[#898587] data-[state=active]:text-white">
                    <span>Daily PL</span>
                </TabsTrigger>
            </TabsList>
        </CardHeader>

        <TabsContent value="balance">
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">

                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[345px] w-full"
                >
                <AreaChart data={data}>
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={20}
                        minTickGap={32}
                        tickFormatter={(value) => {
                            return value.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                maximumFractionDigits: 0,
                            });
                        }}
                    />

                    <defs>
                        <linearGradient id="fillChart" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-total_profit)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-total_profit)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>

                    <CartesianGrid vertical={false} stroke="#1A1819" strokeDasharray="5 5" />

                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={18}
                        minTickGap={32}
                        tickFormatter={(value) => {
                            const date = new Date(value)
                            return date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            })
                        }}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={
                            <ChartTooltipContent
                                labelFormatter={(value) => {
                                    return new Date(value).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    })
                                }}
                                indicator="dot"
                            />
                        }
                    />
                    <Area
                        dataKey="total_profit"
                        type="natural"
                        fill="url(#fillChart)"
                        stroke="var(--color-total_profit)"
                        stackId="a"
                    />
                </AreaChart>
                </ChartContainer>
            </CardContent>
        </TabsContent>

        <TabsContent value="daily" className="p-4 text-white">
            component2
        </TabsContent>
      </Tabs>
    </Card>
  )
}

export default AreaChartComponent;
