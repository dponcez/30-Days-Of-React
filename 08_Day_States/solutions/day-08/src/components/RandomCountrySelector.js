import React, { Component } from 'react';
import Button from './Button'
import countriesData from '../data/countries';

const countries = countriesData

const Header = () => {
    return(
        <header className='header'>
            <h1>30 days of react</h1>
            <h3>getting started with react</h3>
            <p>JavaScript library</p>
        </header>
    )
}

class Countries extends Component {
    render(){
        const {index, onChangeCountry} = this.props
        let flag = countries[index].flag
        const name = countries[index].name
        const capital = countries[index].capital
        const languages = countries[index].languages
        const currency = countries[index].currency
        const numberFormatted = new Intl.NumberFormat().format(countries[index].population)

        const onHandleChange = () => onChangeCountry()
        return(
            <div className='container'>
                <div className='populations' key={index}>
                    <figure className='image--container'>
                        <img className='flag' src={flag} alt={name}/>
                        <figcaption>
                            <p className='country--name'>{name}</p>
                        </figcaption>
                    </figure>
                    <div className='info--container'>
                        <p>capital: <span className='capital'>{capital}</span></p>
                        <p>language: <span className='languages'>{languages}</span></p>
                        <p>population: <span className='population'>{numberFormatted}</span></p>
                        <p>currency: <span className='currency'>{currency}</span></p>
                    </div>
                </div>
                <Button
                    text='change country'
                    onClick={onHandleChange}
                />
            </div>
        )
    }
}

class RandomCountrySelector extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: (() => Math.floor(Math.random() * countries.length))()
        }
    }

    onChangeCountry = () => {
        this.setState({
            index: (() => Math.floor(Math.random() * countries.length))()
        })
    }
    render(){
        return(
            <>
                <Header/>
                <Countries
                    index={this.state.index}
                    onChangeCountry={this.onChangeCountry}
                />
            </>
        )
    }
}

export default RandomCountrySelector