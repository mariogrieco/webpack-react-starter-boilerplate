import React from 'react'
import Consumer from '../../Context/Consumer'

const Home = (props) => {
  return (
    <Consumer>
      {(value) => {
        console.log(value);
        return (
          <p>
            This is the about page
          </p>
        )
      }}
    </Consumer>
  )
}

export default Home
