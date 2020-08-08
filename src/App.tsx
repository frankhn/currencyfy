import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { Row, Col, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap'
import 'react-flags-select/css/react-flags-select.css';
import './App.css'
import Form from './resources/form'

interface Props {

}


const App = (props: Props) => {
  const [ state, setState ] = useState({
    amountA: 1,
    amountB: 2,
    countryA: "GB",
    countryB: "US",
    currentExchangeRate: null
  })

  const handleAmountChange = (e: any) => {
    setState({ ...state, [ e.target.name ]: e.target.value })
  }

  useEffect(() => {
    console.log("State changed")
  })

  return (
    <div className="container"
      style={ { margin: "20vh auto", padding: "2rem 3rem" } }>
      <Form change={handleAmountChange} initial={state} />
    </div>
  );
}

export default App;
