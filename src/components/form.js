import React from 'react';

class Form extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
  }  
  
  onChange = (e) => {
    this.props.do(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} />
      </form>
    );
  }
}

export default Form;
