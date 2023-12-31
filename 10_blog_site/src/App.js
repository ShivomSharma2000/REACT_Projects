import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const {dataFetching} = useContext(AppContext)

  useEffect(()=>{
    dataFetching();
  },[])
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1"> 
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
