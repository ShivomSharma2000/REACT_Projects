import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount,setAmount] = useState(0);
  const [from,setFromCurrency] = useState('usd');
  const[to,setToCurrency] = useState('inr');
  const[convertedAmount,setConvertedAmount] = useState(0);
  
  const useCurrencyInfo = useCurrencyInfo(from);
  const restOptions = Object.keys(useCurrencyInfo);


  return (
    <>
      <h1 className='bg-green text-3xl'>Currency Convertor App</h1>
      
      <InputBox/>
    </>
  )
}

export default App
