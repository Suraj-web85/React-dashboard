import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import GeoChart from "../../components/GeoChart";
import Header from "../../components/Header";

const Gechart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography Chart" sutitle="Simple Geo Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Gechart;
