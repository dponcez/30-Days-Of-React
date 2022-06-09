import React, { useEffect, useState } from 'react';
import '../styles/LoadData.scss';

const LoadFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if(response.ok) return response.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
        setError(error)
      })
      .finally(() => {
        setLoading(true)
      })
  }, [])

  if(!loading) return 'Loading, please wait...'
  if(error) return 'Error'
  return(
    <div className='info--container'>
      <h1 className='heading'>fetching data from <span>api</span></h1>
      {data.map((item, index) => (
        <div className='box' key={index}>
          <p className='user user--full__name'>full name: <span>{item.name}</span></p>
          <p className='user user--name'>user name: <span>{item.username}</span></p>
          <p className='user user--email__address'>email address: <span>{item.email}</span></p>
        </div>
      ))}
    </div>
  )
}

export default LoadFetchData