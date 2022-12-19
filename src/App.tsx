import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Surahs } from './Model/Model';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import { createContext } from 'react';
import Some from './pages/Some';
export const Context = createContext(1);

function App() {
  const [data, setData] = useState<Surahs>();
  const [suraNumber, setSuraNumber] = useState<number>(1)
  useEffect(() => {
    const getData = async () => {
      await axios.get("http://api.alquran.cloud/v1/quran/ar.alafasy").then(req => setData(req.data));
    }
    getData()
  }, [])
  console.log(data)
  return (
    <div className="App">
      <Context.Provider value={suraNumber} >
        <Router>
          <Navbar setNumber={setSuraNumber} />
          <Routes>
            <Route path='/' element={<Main Cards={data} />} />
            <Route path='/:id' element={<Some Sura={data} />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
