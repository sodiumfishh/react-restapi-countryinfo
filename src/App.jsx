import {useContext, useEffect} from "react"
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Lists from "./components/Lists"
import Details from "./components/Details"
import {MyContext} from "./context"
//CSS
import "./style.css"

const App = () => {
  const {darkMode} = useContext(MyContext)

  const colors = {
    dark: {

    },
    light: {
      text: "hsl(200, 15%, 8%)",
      input: "hsl(0, 0%, 52%)",
      elements: "hsl(0, 0%, 100%)",
      background: "hsl(0, 0%, 98%)",
    },
    dark: {
      text: "hsl(0, 0%, 100%)",
      input: "hsl(209, 23%, 22%)",
      elements: "hsl(209, 23%, 22%)",
      background: "hsl(207, 26%, 17%)",
    }
  }

  useEffect(() => {
    if(darkMode) {
      console.log("dark")
      const r = document.documentElement
      r.style.setProperty("--text", colors.dark.text)
      r.style.setProperty("--background", colors.dark.background)
      r.style.setProperty("--elements", colors.dark.elements)
      r.style.setProperty("--input", colors.dark.input)
    }else if(!darkMode) {
      console.log('light')
      const r = document.querySelector(":root")
      r.style.setProperty("--text", colors.light.text)
      r.style.setProperty("--background", colors.light.background)
      r.style.setProperty("--elements", colors.light.elements)
      r.style.setProperty("--input", colors.light.input)
    }
  }, [darkMode])

  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Lists />} />
        <Route path="/:id" exact element={<Details />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App