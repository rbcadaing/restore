import { Outlet } from "react-router-dom"
import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { setBasket } from "../../features/basket/basketSlice";

function App() {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId")
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch])

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function handleThemChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message="Initializing App..." />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header handleThemChange={handleThemChange} darkMode={darkMode} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
