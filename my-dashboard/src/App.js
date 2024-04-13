import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./main/global/navbar";
import SideNavbar from "./main/global/sidebar"
import Dashboard from "./main/dashboard";
import Team from "./main/team/team";
import Contacts from "./main/contacts/contacts";
import Invoices from "./main/invoices/invoices";
import Form from "./main/form/form";
import Calendar from "./main/calendar/calendar";
import FAQ from "./main/faq/faq";
import Abchart from "./main/bar/Abchart";
import Rbchart from "./main/RadBar/Rbchart";
import Lnchart from "./main/line/Lnchart";
import Gechart from "./main/geo/Gechart";



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <SideNavbar />
          <main className="content">
            <Navbar />
            <Routes>
              <Route path="/Main-Dashboard-Page" element={<Dashboard />} />
              <Route path="/Management-team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts-information" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/Area-Bump-Chart" element={<Abchart />} />
              <Route path="/line-chart" element={<Lnchart />} />
              <Route path="/Radial-Bar-Chart" element={<Rbchart />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography-chart" element={<Gechart />} />
              <Route path="/calendar" element={<Calendar />} />

     
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
