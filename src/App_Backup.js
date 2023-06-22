import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Box from './Box'
import { useState } from 'react'


function App2() {
    const greeting = <p>What should we have for lunch?</p>
    const templist = (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    )

    const colors = ['azure', 'pink', 'orange']
    const randomColor = colors[Math.floor(Math.random() * 3)]
    const teststyle = {
        border: '10px solid white',
        borderRadius: '5px',
        backgroundColor: randomColor,
        color: 'black',
    }

    

    const [favoriteFood, setFavoriteFood] = useState('chicken rice')
    const [names, setNames] = useState([])
    const [properties, setProperties] = useState({
        color: 'red',
    })

    // setFavoriteFood = () => {
    //     // favoriteFood = "eggs"
    // }
    
    // setNames = () => {
    //     // names = ["alex", "bobby", "charlie"]
    // }


    const handler = () => {
        setProperties({
            color: 'purple',
        })
    }
    return (
        <div className='App'>
            <h1>My favorite color is {properties.color}</h1>
            <Header></Header>
            <header className='App-header'>
                <div className='horizontal-box'>
                    <Box number='10' bgcolor='blue'></Box>
                    <Box number='12' bgcolor='red'></Box>
                </div>
                <button onClick={handler}>Click me</button>
                <button
                    onClick={() => {
                        setFavoriteFood('cat')
                    }}
                >
                    Click me again
                </button>
                <img src={require('./bubbletea.png')} alt='bubble-tea' />
                <div style={teststyle}>Testing my css</div>
                <div>{Math.floor(Math.random() * 10 + 10)}</div>
                {greeting}
                {templist}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <img src={logo} className='App-logo' alt='logo' />
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
