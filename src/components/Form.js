import React from 'react';

class Form extends React.Component {
  state = {
    title:'',
    text:''
  }
  submit = (event) => {
    event.preventDefault();
    this.props.add(this.state.title, this.state.text);
    this.setState({
      title: '',
      text: ''
    });
  }
  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  }
  handleText = (event) => {
    this.setState({
      text: event.target.value
    });
  }
  render(){
    return(
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitle} />
        <textarea placeholder="Note" value={this.state.text} onChange={this.handleText} ></textarea>
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default Form;
