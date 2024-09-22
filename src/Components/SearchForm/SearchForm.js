import { Component } from "react";
import "./SearchForm.css"

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleNameChange(event) {
    this.setState(
      {
        query: event.target.value,
      },
    //   () => console.log(this.state.inputName)
    );
  }

  handleFormSubmit(){
    this.props.history.push('/search', {query: this.state.query})
    console.log("Form enviado")
  }
  render() {
    return (
      <section>
      <form onSubmit={(event)=> event.preventDefault()}>
        <input className="search-form_input"
          onChange={(event) => this.handleNameChange(event)}
          name="userName"
          value={this.state.query}
        /> <button className="search-form_button" onClick={()=> this.handleFormSubmit()}>Buscar pelicula</button>
      </form>
      </section>
    );
  }
}

export default SearchForm;
