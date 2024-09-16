import { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
    };
  }

  handleNameChange(event) {
    this.setState(
      {
        inputName: event.target.value,
      },
    //   () => console.log(this.state.inputName)
    );
  }

  handleFormSubmit(){
    console.log("Form enviado", this.state.inputName)
  }
  render() {
    return (
      <form onSubmit={(event)=> event.preventDefault()}>
        <input
          onChange={(event) => this.handleNameChange(event)}
          name="userName"
          value={this.state.inputName}
        />
        <button onClick={()=> this.handleFormSubmit()} type="submit">Enviar</button>
      </form>
    );
  }
}

export default SearchForm;
