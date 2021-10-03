import React from 'react'
import SearchResult from '../SearchResults/SearchResults'
import  {carsData} from '../../Data/Data'
import { useHistory } from 'react-router';
import './RusultsPage.css'

function ResultsPage(props) {
    const history =useHistory()
    // getting the values that the user has putted in his search
    const city=history.location.state.searchWord
    const seats =history.location.state.seats
    const dates=history.location.state.dates
    // taking from data the matching cars
    const list=carsData.filter(car=>city.includes(car.city) && car.state==='available'&& car.seats===seats)
    const carsList =  list.map((item) => 

            <SearchResult key={item.id}
            carId = {item.id}
            wishlist={props.wishlist}
            setWishlist={props.setWishlist}
            img={item.img}
            title={item.name}
            description= {item.kilometer + " · " + item.fuel + " · " + item.transmission + " · " + item.seats }
            star={item.rating}
            price={item.price}
            total={ dates}
            isLogged={props.isLogged}
                />
          
    

)
props.setDays(dates)
    return (
        <div className="searchPage">
            {carsList}
        </div>
    )
}

export default ResultsPage
