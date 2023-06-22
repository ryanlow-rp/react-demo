import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import FineCalculator from './FineCalculator'

function App() {
    return (
        <>
            <div className='container'>
                <Header title='Always Due Library' />
                <h1>Fine Calculator</h1>
                <FineCalculator></FineCalculator>
            </div>
        </>
    )
}

export default App
