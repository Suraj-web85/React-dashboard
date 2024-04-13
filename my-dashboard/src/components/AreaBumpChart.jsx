import { useTheme } from "@mui/material";  
import { tokens } from "../theme";
import { areaBumpData as data } from "../data/tempData";
import { ResponsiveAreaBump } from '@nivo/bump';
import { Palette } from "@mui/icons-material";
  
  
  
  const BarChart = ({isDashboard = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <ResponsiveAreaBump
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke : colors.grey[100]
                    }
                }
            },
            legend :{
                text:{
                    fill:colors.grey[100]
                }
            },
            ticks :{
                line :{
                    stroke : colors.grey[100],
                    strokeWidth:1,
                }
            },
            text :{
                fill:colors.grey[100],
            },
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: 'pastel1' }}
        blendMode="multiply"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        startLabel="id"
        startLabelPadding={11}
        endLabel="id"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:isDashboard ? undefined : '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        motionConfig="molasses"
    />
    )
  }

  export default BarChart;