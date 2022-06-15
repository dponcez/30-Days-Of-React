import React from 'react';
import '../../styles/Design.scss';

const Button = ({subscribe, onClick}) => (
  <button
    className='subscribe--btn'
    onClick={onClick}
  >
    {subscribe}
  </button>
)

const Form = ({handleSubmit}) => {
  return (
    <form 
      className='subscribe--form'
      onSubmit={(e) => e.preventDefault()}
      >
      <div className='input--container'>
          <input type="text" name="fname" placeholder="Full name"/>
          <input type="text" name="lname" placeholder="Last name"/>
          <input type="email" name="email" placeholder="Email"/>
      </div>
      <Button
          subscribe='Subscribe'
          onClick={handleSubmit}
      />
    </form>
  )
}

class Design extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <article className="background">
        <div className='subscribe--container'>
          <h1 className='subscribe'>{this.props.subscribe}</h1>
          <p className='text'>{this.props.text}</p>
          <Form handleSubmit={this.props.handleSubmit}/>
        </div>
      </article>
    );
  }
}

export default Design;