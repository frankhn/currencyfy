import React, { Component } from 'react';
import 'react-flags-select/css/react-flags-select.css';
import './App.css'
import Form from './resources/form'
import request from './resources/config/Axios'
import { connect } from 'react-redux';
import { AppState } from './store';
import { checkRates } from './store/actions'
import Spinner from './resources/spinner'

interface Props {
  rates: any
  loading: boolean
  checkRates:any
}

interface State {
  amountA: number
  amountB: number
  countryB: string
  currentExchangeRate: number
  rates: any
  baseCurrency: string,
  date: Date
  error: string
}


class App extends Component<Props, State> {
  // const [ state, setState ] = useState(initial)

  state = {
    amountA: 1,
    amountB: 1,
    countryB: "RUB",
    currentExchangeRate: 0,
    rates: {},
    baseCurrency: "USD",
    date: new Date(),
    error: ""
  }

  handleChange = (e: any) => {
    this.setState({ amountA: e.target.value })
  }

  handleCountryChange = (countryCode: string) => {
    this.setState({ countryB: countryCode })
  }

  handleBaseCountryChange = (countryCode: string) => {
    this.setState({ baseCurrency: countryCode })
    this.props.checkRates(countryCode)
  }

  componentDidMount() {
    this.props.checkRates("USD")
  }


  render() {
    const { rates, loading } = this.props
    let amountB = 1
    if(rates !== undefined) {
      const rate = rates[this.state.countryB]
      amountB = rate * this.state.amountA
    }
    return (
      <div className="container"
        style={{ margin: "20vh auto", padding: "2rem 3rem" }}>
        <div style={{ textAlign: "center"}}>
          <h1>Currencyfy</h1>
          <h5>This is a Currency converter with live rates from 
            the &nbsp;
            <a target="_blank" href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">
              European central bank
              </a>
            </h5>
        </div>
        {
          loading && loading
          ? <Spinner />
          : rates && rates
            ? <Form
                change={this.handleChange}
                initial={{...this.state, amountB }}
                baseCountry={this.handleBaseCountryChange}
                countryChange={this.handleCountryChange} />
          : <div style={{ textAlign: "center"}}>
            Please check your internet connection
            </div>
        }
         <div style={{ textAlign: "center", marginTop: '5rem'}}>
          <h6>&nbsp;
            <a target="_blank" href="https://github.com/frankhn/currencyfy#available-scripts">
              Documenation
              </a>
            </h6>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
 const {rates, loading, error } = state.Rates
 return {
   rates, loading, error
 }
}

export default connect(mapStateToProps, {checkRates})(App)
