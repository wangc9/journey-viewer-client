import { StationJourneyCountByMonth } from "@/types/stations";
import { ResponsiveLine } from "@nivo/line";

export default function JourneyCountChart({
  data,
}: {
  data: Array<StationJourneyCountByMonth>;
}) {
  const formattedData = [
    {
      id: "departure",
      color: "hsl(220, 78%, 56%)",
      data: data.map((item) => ({
        x: new Date(item.month).toLocaleDateString(undefined, {
          year: "numeric",
          month: "2-digit",
        }),
        y: item.departure_count,
      })),
    },
    {
      id: "return",
      color: "hsl(182, 39%, 17%)",
      data: data.map((item) => ({
        x: new Date(item.month).toLocaleDateString(undefined, {
          year: "numeric",
          month: "2-digit",
        }),
        y: item.arrival_count,
      })),
    },
  ];

  console.log(formattedData);
  return (
    <ResponsiveLine
      data={formattedData}
      margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat={">-.0f"}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Month",
        legendPosition: "middle",
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Journey Count",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      enableSlices="x"
      legends={[
        {
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -25,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          toggleSerie: true,
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
