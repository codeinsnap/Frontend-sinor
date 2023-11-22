import Router from "./router/Router";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "./Theme";
import NavigationBar from "./component/navigationBar/NavigationBar";
import Footer from "./component/footer/Footer";
import { handleCurrentUser } from "./Redux/Reducers/navigationReducer";
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch<any>()
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) navigate('/')
    const userData = localStorage.getItem("userData");
    if (userData) dispatch(handleCurrentUser(JSON.parse(userData)));
  }, []);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <NavigationBar />
      <div className="App flex justify-center">
        <Router />
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
