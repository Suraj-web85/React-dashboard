  import { Box } from "@mui/material";
  import Header from "../../components/Header";
  import AreaBumpChart from "../../components/AreaBumpChart";

  const Abchart = () => {
    return (
      <Box m="20px">
      <Header title="Area Bump Chart" sutitle="Simple Bar Chart" />
      <Box height="75vh">
        <AreaBumpChart />
      </Box>
      </Box>
    )
  }

  export default Abchart;