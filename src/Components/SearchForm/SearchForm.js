import { Component } from "react";
import "./SearchForm.css"

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
      <section>
      <form onSubmit={(event)=> event.preventDefault()}>
        <input className="search-form_input"
          onChange={(event) => this.handleNameChange(event)}
          name="userName"
          value={this.state.inputName}
        /> <button className="search-form_button" onClick={()=> this.handleFormSubmit()} type="submit">Buscar pelicula</button>
      </form>
      </section>
    );
  }
}

export default SearchForm;
