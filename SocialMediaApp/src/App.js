import "./App.css"
import Home from "./pages/home/Home"
import Profile from "./pages/Profile/Profile"
import Auth from "./pages/Auth/Auth"
function App() {
  return (
    <div className="App">
        <div className="Blur" style={{top:'-18%', right:'0'}}></div>
        <div className="Blur" style={{top:'46%', left:'-8rem'}}></div>
        <Home/>
        {/* <Profile/> */}
        {/* <Auth/> */}
    </div>
  );
}

export default App;
