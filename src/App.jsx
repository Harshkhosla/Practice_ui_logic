import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './component/Header/Header'
import { Home } from './Pages/Home';

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <br />
        <br />
        <br />
      </div>
    </>
  )
}



export default App
