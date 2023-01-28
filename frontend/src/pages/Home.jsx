import React from 'react'
import { Helmet } from 'react-helmet'
import Book from '../components/Home/Book/Book'
import Customers from '../components/Home/Customers/Customers'
import HeroSec from '../components/Home/HeroSec/HeroSec'
import LegalSolution from '../components/Home/LegalSolution/LegalSolution'
import PracticeSec from '../components/Home/PracticeSection/PracticeSec'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSec />
      <PracticeSec />
      <Book />
      <Customers />
      <LegalSolution />
    </>
  )
}

export default Home
