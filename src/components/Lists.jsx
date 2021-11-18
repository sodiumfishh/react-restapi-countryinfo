import {useState, useEffect, useContext} from "react"
import axios from "axios"
import ListItem from "./ListItem"
import {MyContext} from "../context"

const Lists = () => {

	const {countries} = useContext(MyContext)

	const [inputVal, setInputVal] = useState({
		search: "",
		select: ""
	})
	// const [countries, setCountries] = useState([])
	const [filteredCountries, setFilteredCountries] = useState([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const {data} = await axios("https://restcountries.com/v2/all")
	// 		setCountries(data)
	// 		setFilteredCountries(data)
	// 	}

	// 	fetchData()
	// }, [])

	useEffect(() => {
		setFilteredCountries(countries)
		filterCountries()
	}, [inputVal, countries])

	function handleChange(e) {
		setInputVal({
			...inputVal,
			[e.target.name]: e.target.value
		})
	}	

	function filterCountries() {
		let filtered = []
		countries.forEach(country => {
			if(country.name.toLowerCase().includes(inputVal.search.toLowerCase())  && country.region.toLowerCase().includes(inputVal.select.toLowerCase())) {
				filtered.push(country)
			}
		})
		setFilteredCountries(filtered)
	}

	return(
		<div className="container lists-input">
			<div className="input-container">
				<input type="text" placeholder="Search for a country..." name="search" value={inputVal.search} className="search-input" onChange={handleChange} />
				<div>
					<label style={{fontSize: "1.25rem", color: "#fff", marginRight:"18px", display:"inline-block"}} for="region-select">Select Region:</label>
					<select id="region-select" name="select" onChange={handleChange} value={inputVal.select} className="select-input">
						<option value="">Filter By Region</option>
						<option value="Africa">Africa</option>
						<option value="America">America</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceaniaz</option>
					</select>
				</div>
			</div>
			<div className="countries-list">
				{
					filteredCountries.map((country, i) => (
								<ListItem key={i} country={country } />
					))
				}
			</div>
		</div>
	)
}

export default Lists