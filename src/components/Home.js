import React from 'react'
import {useSelector} from 'react-redux'

const Home = () => {
    const fetchdata = useSelector(state => state.data)
    return (
        <div>
            {fetchdata}
        </div>
    )
}

export default Home
