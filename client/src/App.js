import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import HomePage from "./scenes/homePage/Index.jsx";
import LoginPage from "./scenes/loginPage/Index.jsx";
import ProfilePage from "./scenes/profilePage/Index.jsx";
import { useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme} from "@mui/material/styles";
import { themeSettings } from "./theme.js";
import ChatApp from "scenes/chatApp/ChatApp.jsx";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       < Routes>
          {/* <Route path="/" element= {<LoginPage />} />
          <Route 
              path="/home" 
              element={isAuth ? <HomePage /> : <Navigate to="/"/>} />
          <Route 
              path="/profile/:userId"   
              element={isAuth ? <ProfilePage />  : <Navigate to="/" />} /> */}
          <Route
              path="/messages"
              element={ <ChatApp />} />
        </Routes>
        <Toaster />
        </ThemeProvider>   
      </BrowserRouter>
    </div>
  );
}

export default App;
