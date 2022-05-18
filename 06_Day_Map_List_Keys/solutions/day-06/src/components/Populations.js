import React from 'react'
import { tenHighestPopulation } from '../data/ten_most_highest_populations'
import '../styles/Population.css'

const countries = tenHighestPopulation.map((items, index) => {
  const numberFormatted = new Intl.NumberFormat().format(items.population)
  const worldPopulations = tenHighestPopulation[0].population
  const width = new Intl.NumberFormat('en-US', {style: 'percent'}).format(items.population / worldPopulations)

  return (
    <div className='population' key={index}>
      <div className='country'>{items.country.toUpperCase()}</div>
        <div className='graph'>
          <div style={{
            width: width,
            height: '2rem',
            backgroundColor: 'hsl(50, 98%, 61%)'
            }}
          >{''}</div>
        </div>
        <p className='number--format'>{numberFormatted}</p>
    </div>
  )
})

const Countries = () => (
  <>{countries}</>
)

const Populations = () => {
  return (
    <div className='container'>
      <h1 className='heading'>30 days of react</h1> 
      <p className='text'>world population</p>
      <small className='small--text'>ten most populated countries</small>
      <div className='population--container'>
        <Countries/>
      </div>
    </div>
  )
}

export default Populations