import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CatParadise.scss'

const CatParadise = () => {
  const [ data, setData ] = useState([])
  const [ error, setError ] = useState(null)

  const BASE_URL = 'https:/api.thecatapi.com'

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const getBreedURL = `${BASE_URL}/v1/breeds`
    try {
      const response = await axios.get(getBreedURL);
      const data = await response.data;
      setData(data)

    } catch (error) {

      setError(error)
      console.log(`Something went wrong while trying to fetch data: ${error}`)
    }
  }

  const cats = data;

  const weight = () => {
    let catsWeight = [];

    cats.map(cat => {
      const getEachCatWeight = cat.weight.metric
        .split(' - ')
        .map(item => parseInt(item, 10))

      const catWeight = getEachCatWeight.reduce((
        acc, cur
      ) => (acc + cur) / 2)

      catsWeight.push(catWeight);
      return catsWeight
    })

    const totalWeight = catsWeight.reduce((acc, cur) => acc + cur, 0);
    const averageWeight = (totalWeight / cats.length).toFixed(2);

    return averageWeight
  }

  const getLifeSpan = () => {
    let catsLifeSpan = [];

    cats.map(cat => {
      const getEachCatLifeSpan = cat.life_span
        .split(' - ')
        .map(item => parseInt(item, 10))

      const catLifeSpan = getEachCatLifeSpan.reduce((
        acc, cur
      ) => (acc + cur) / 2)
  
      catsLifeSpan.push(catLifeSpan)
      return catsLifeSpan
    })

    const totalLifeSpan = catsLifeSpan.reduce((acc, cur) => acc + cur, 0);
    const averageLifeSpan = (totalLifeSpan / cats.length).toFixed(2);

    return averageLifeSpan
  }

  if(error) return 'Something went wrong!'

  return (
    <div className='cats--paradise'>
      <h1>cats paradise</h1>
      <h2>there are <span>{data.length}</span> cat breeds around the world</h2>
      <p>
        on average a cat weights about{' '}
        <span>{weight()}</span> kg and lives approximately {' '}
        <span>{getLifeSpan()}</span> years
      </p>
    </div>
  )
}

export default CatParadise