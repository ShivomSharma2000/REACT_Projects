import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef();  //'useRef' is mainly used for UI betterment(like select given area when we will copy)

  //copy password 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();                  //this is used for selecting whole password
    // passwordRef.current?.setSelectionRange(0,3);   //this is used for selecting a particular length
    window.navigator.clipboard.writeText(password);
  }, [password]);


  //generating random password
  let defaultCall = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let characters = "!@#$%^&*(){}|?/<";

    if (numberAllowed) str += numbers;
    if (charAllowed) str += characters;

    for (let i = 1; i <= length; i++) {
      let findRandom = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(findRandom);
    }

    setPassword(pass);


  }, [length, numberAllowed, charAllowed, setPassword]); // this line for optimizing


  //call 'defaulatCall' function , 'useEffect' hook memorise the things as much as possible(that's why our code will be optimize)
  useEffect(() => {              //'useEffect' hook always run's first in whole code
    defaultCall();
  }, [length, numberAllowed, charAllowed, setPassword]); //this is a line where we are watching when our 'defaultCall' function will call(it's run when any dependencies will change)

  

  return (
    <>
      <div className="w-full max-w-md mx-auto bg-slate-700 translate-y-[150px] rounded-lg py-5">
        <div className="translate-x-[-10px]">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}            //Use select given area when we will copy
            className="w-[350px] h-[30px] rounded-md bg-slate-50 translate-x-[30px] cursor-pointer outline-none px-2 py-3"
          ></input>
          <button
            onClick={copyPasswordToClipboard} 
            className="translate-x-[40px] px-2 py-1
             bg-blue-600 rounded-md text-white
             hover:bg-blue-800"
          >
            copy
          </button>
        </div>

        <div className="flex gap-3 mt-3 translate-x-5 text-white">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label>Length: {length}</label>

          <div className="flex">
            <input
              type="checkbox"
              className="mr-1"
              onChange={() => {
                if (numberAllowed == false) setNumberAllowed(true);
                else setNumberAllowed(false);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              className="mr-1"
              onChange={() => {
                if (charAllowed == false) setCharAllowed(true);
                else setCharAllowed(false);
              }}
            />
            <h2>Characters</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
