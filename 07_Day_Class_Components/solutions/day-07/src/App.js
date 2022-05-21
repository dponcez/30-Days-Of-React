import React from 'react'
import UserCard from './components/UserCard'
import userImage from './images/asabeneh.jpg'

class App extends React.Component {

    showDate = (time) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]

        const month = months[time.getMonth()].slice(0, 3);
        const year = time.getFullYear();
        const date = time.getDate();

        return `${month} ${date}, ${year}`
    }
    
    render(){
        const webTechs = [
            'HTML', 'CSS', 'Sass', 'JS', 
            'React', 'Redux', 'Node',
            'MongoDB', 'Python', 'Flask',
            'Django', 'NumPy', 'Pandas',
            'Data Analysis', 'MYSQL', 'GraphicQL',
            'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
        ]

        const userInfo = {
            name: 'asabeneh yetayeh',
            info: 'senior developer',
            image: userImage,
            country: 'finland'
        }

        const technologies = webTechs.map((techs, index) => (
            <button className='btn' key={index}>{techs}</button>
        ))
        
        return(
            <div className='App'>
                <UserCard
                    userInfo={userInfo}
                    webTechs={technologies}
                    showDate={this.showDate(new Date())}
                />
            </div>
        )
    }
}

export default App