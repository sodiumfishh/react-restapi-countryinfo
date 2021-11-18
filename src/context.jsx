import {useState, createContext, useEffect} from "react"
import axios from "axios"

export const MyContext = createContext()

export const MyContextProvider = ({children}) => {
	const [darkMode, setMode] = useState(false)
	const [countries, setCountries] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const {data} = await axios.get("https://restcountries.com/v2/all")
			setCountries(data)
		}

		fetchData()
	}, [])

	function setModeFunc() {
		setMode(!darkMode)
	}

	console.log(darkMode)

	function getCountry(id) {
		let c 
		countries.forEach(country => {
			if(country.alpha2Code == id) {
				console.log("found")
				c = country
			}else {
				console.log("not found")
			}
		})
		return c
	}

	return(
		<MyContext.Provider value={{darkMode, setModeFunc, countries, getCountry}}>
			{children}
		</MyContext.Provider>
	)
}