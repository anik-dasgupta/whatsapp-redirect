import './App.css';
import { Component } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ReactGA from 'react-ga';

function App() {
  return (
    <WhatsappRedirector/>
  );
}

class WhatsappRedirector extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    };
  }

  handleChange (e) {
    this.setState({number: e});
  }

  render() {

    const TRACKING_ID = "UA-215045006-3";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <div className="App">
        <header className="App-header">
          Whatsapp a number without saving it!
        </header>
        <div className="PhoneInput">
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="IN"
            value={this.state.number}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <Button value={this.state.number}/>
      </div>
    );
  }

}

class Button extends Component {
  handleClick() {
    window.location.assign('https://api.whatsapp.com/send?phone=' + this.props.value);
  }

  render() {
    return (
      <button className="Button"
       onClick={() => this.handleClick(this)} >
         Send Message
      </button>
    );
  }
}

export default App;
