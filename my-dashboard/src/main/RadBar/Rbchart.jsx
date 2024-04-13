import { Box } from "@mui/material";
import Header from "../../components/Header";
import RadialBarChart from "../../components/RadialChart";

const Rbchart = () => {
  return (
    <Box m="20px">
    <Header title="Radial Bar Chart" sutitle="Simple Radial Bar Chart" />
    <Box height="75vh">
      <RadialBarChart />
    </Box>
    </Box>
  )
}

export default Rbchart;