import logo from './logo.svg'
import './App.css'

function App() {
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

    return (
        <div className='App'>
            <header className='App-header'>
                {/* <img src={logo} className='App-logo' alt='logo' /> */}
                <img src={require('./bubbletea.png')} alt='bubble-tea' />
                <div style={teststyle}>Testing my css</div>
                <div>{Math.floor(Math.random() * 10 + 10)}</div>
                {greeting}
                {templist}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
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
