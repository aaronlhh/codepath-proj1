import { useState } from 'react'
import headerPic from './assets/awning.png'
import Container from '../components/Container'
import './App.css'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='App'>
                <div className='Header'>
                    <img src={headerPic} />
                    <h1>Food truck Favorites</h1>
                </div>
                <Container/>
            </div>
        </>
    )
}

export default App
