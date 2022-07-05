import React, { Component } from 'react'
import styles from '../../styles/ComponentLifeCycles.module.css'

class ComponentLifeCylces extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const API_URL = 'https://restcountries.com/v3.1/all'
    fetch(API_URL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({ data })
      })
      .catch(error => console.log(`Error fetching data: ${error}`))
  }

  renderCountries = () => {
    return this.state.data.map((country, id) => (
      <div className={styles.box} key={id}>
        <div className={styles.imageContainer}>
          {' '}
          <img src={country.flags.png} alt={country.name.official}/>
        </div>
        <div className={styles.infoContainer}>
          <h1>{country.name.official}</h1>
          <p className={styles.population}>
            Population: <span>{country.population}</span>
          </p>
        </div>
      </div>
    ))
  }

  render(){
    return(
      <div className={styles.lifeCycle}>
        <p className={styles.length}>There are {this.state.data.length} countries in the API.</p>
        <div className={styles.container}>{this.renderCountries()}</div>
      </div>
    )
  }
}

export default ComponentLifeCylces