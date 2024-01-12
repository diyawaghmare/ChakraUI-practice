import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: "#024fc9",
    800: "#146af5"
  }
}

const fonts = {
  // body: "Tahoma",
  // heading: "Courier New"
}

const theme = extendTheme({colors, fonts})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
