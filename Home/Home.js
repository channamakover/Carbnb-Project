import React from 'react'
import './home.css'
import ResultsPage from '../SearchPage/SearchPage'

function Home() {
    return (
        <div className="homeImg">
            <div className="search">
            <ResultsPage/>
            </div>

        </div>
    )
}

export default Home

