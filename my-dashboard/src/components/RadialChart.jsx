import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { vegData as data } from "../data/tempData";
import { ResponsiveRadialBar } from '@nivo/radial-bar';

const RadialBarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveRadialBar
      data={data}
      theme={{
        axis:{
          domain:{
            line:{
              stroke:colors.grey[100]
            }
          },
          legend:{
            text:{
              fill:colors.grey[100]
            }
          },
          ticks:{
            line:{
              stroke:colors.grey[100],
              strokeWidth:1
            },
          
          text:{
            fill:colors.grey[100]
          }
        }
      },
      legends:{
        text:{
          fill:colors.grey[100]
        }
      },
      tooltip:{
        container:{
          color:colors.primary[500]
        }
      },
      }}
      valueFormat=">-.2f"
      startAngle={-3}
      endAngle={296}
      padding={0.4}
      cornerRadius={2}
      margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
      colors={{ scheme: 'purpleRed_green' }}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 80,
          translateY: 0,
          itemsSpacing: 6,
          itemDirection: 'left-to-right',
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          symbolSize: 18,
          symbolShape: 'square',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  );
};

export default RadialBarChart;
