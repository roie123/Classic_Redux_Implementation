import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch, useAppSelector} from "./Redux-files/ReduxHooks";
import {Provider, useDispatch} from "react-redux";
import {changeAge, changeName, personSlice} from "./Redux-files/PersonSlice";


function App() {
  const personState = useAppSelector(state => state.person);
  const dispatch = useAppDispatch();


    function handleChangeName() {
        console.log('handleChangeName called');
        dispatch(personSlice.actions.changeName((Math.random() + 1).toString(36).substring(7)));
    }

    function handleChangeAge() {
        console.log('handleChangeAge called');
        dispatch(changeAge(personState.age * Math.random()));
    }
  return (

        <>
          <div className="person-cont">
            <p>name:{personState.name} , Age : {personState.age}</p>
              <button onClick={(handleChangeName)}>Change Name</button>
              <button onClick={handleChangeAge}>Change Age</button>
          </div>
        </>



  );
}

export default App;
