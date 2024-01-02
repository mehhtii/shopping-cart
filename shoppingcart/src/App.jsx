import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Box} from "@chakra-ui/react"
import Navbar from '../components/Navbar'
import ProductItem from '../components/productItem'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Box>
    <Navbar/>
    <Box display={"flex"} flexWrap={"wrap"} gap={"40px"} padding={"10px"} backgroundColor={"#ddd"}>
      <ProductItem/>
    </Box>
   </Box>
  )
}

export default App
