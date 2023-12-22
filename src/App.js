import Timeline from "./Components/Timeline";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider  theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Timeline />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
