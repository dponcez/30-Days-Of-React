import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/CatPerCountries.scss'

const CatPerCountries = () => {
  const [ data, setData ] = useState([])
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(false)

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
      setLoading(true)

    } catch (error) {

      setError(error)
      console.log(`Something went wrong while trying to fetch data: ${error}`)
    }

    setLoading(true)
  }

  const numberOfCountries = () => {
    const cats = [...data ];
    const getFilteredOrigin = [];
    const getCatOrigin = cats.map(item => item.origin).sort();
    getCatOrigin.map(item => {
      if(!getFilteredOrigin.includes(item)){
        getFilteredOrigin.push(item)
      }

      return getFilteredOrigin
    })

    return getFilteredOrigin
  }

  const countDuplicateCats = () =>  {
    const cats = [...data ];
    const mappedCats = cats.map(cat => cat.origin).sort();
    const counts = {};

    for(let i = 0; i < mappedCats.length; i++){
      if(counts[mappedCats[i]]){
        counts[mappedCats[i]] += 1
      }else {
        counts[mappedCats[i]] = 1
      }
    }

    const entries = Object.entries(counts)

    const entriesSorted = entries.sort((posA, posB) => {
      if(posA[1] < posB[1]) return -1;
      if(posA[1] > posB[1]) return 1;
      return 0
    })

    const getEntriesInTable = entriesSorted.map((item, index) => (
      <tr key={index}>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
      </tr>
    ))

    const countryHighestBreedCats = {
      ...getEntriesInTable[getEntriesInTable.length - 1]
    }

    return (
      <>
        <p>
          among these contries, <span>{countryHighestBreedCats[0]}</span> has
          the highest number of cat breeds.
        </p>
        <table className="table--container">
          <thead>
            <tr>
              <th>country</th>
              <th>number of breeds</th>
            </tr>
          </thead>
          <tbody>{getEntriesInTable}</tbody>
        </table>
      </>
    );
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

  if(!loading) return ''
  if(error) return 'Something went wrong!'

  return (
    <div className='cats--paradise'>
      <h2>cats paradise</h2>
      <h3>there are {data.length} cat breeds in the <span>API</span></h3>
      <p>
        on average a cat weights about{' '}
        <span>{weight()}</span> kg and lives approximately {' '}
        <span>{getLifeSpan()}</span> years
      </p>
      <p>
        there are <span>{numberOfCountries().length}</span> 
        {' '} countries in total in the world, which have cat breeds, these countries are {' '}
        <span>
          {numberOfCountries().join(', ')}
        </span>
      </p>
      {countDuplicateCats()}
    </div>
  )
}

export default CatPerCountries