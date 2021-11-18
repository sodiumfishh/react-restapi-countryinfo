import {useEffect, useState} from "react"
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Details = () => {
	const [countryInfo, setCountryInfo] = useState(null)

	const {id} = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const fetchDetails = async () => {
			const {data} = await axios.get(`https://restcountries.com/v2/alpha/${id}`)
			setCountryInfo(data)
		}

		fetchDetails()
	}, [])

	return(
		<>
		<div className="container">
			<button className="btn-back" onClick={() => navigate("../")}><i className="fas fa-arrow-left"></i> Go Back</button>
		</div>
		<div className="details-wrapper container">
			{
				countryInfo != null ?
				(	
					<>
						<div className="details-img-wrapper">
			 				<img src={countryInfo.flag} alt={`${countryInfo.name} flag`} />
			 			</div>
						<div className="details-info-wrapper">
							<h3 className="details-name">{countryInfo.name}</h3>
							<div className="details-subinfo">
								<p><b>Native Name:</b> {countryInfo.nativeName}</p>
								<p><b>Population:</b> {countryInfo.population}</p>
								<p><b>Region:</b> {countryInfo.region}</p>
								<p><b>Sub-Region:</b> {countryInfo.subregion}</p>
								<p><b>Capital:</b> {countryInfo.capital}</p>
								<p><b>Top-Level:</b> {countryInfo.topLevelDomain.join()}</p>
								<p><b>Languages:</b> {countryInfo.languages.map((language, i) => <span key={i}> {language.name},</span>)}</p>
							</div>
							{
								typeof countryInfo.borders !== "undefined" ?
								(<div>
									<p className="borders-header"><b>Borders:</b> <div className="borders-link-wrapper">{countryInfo.borders.map((border, i) => <Link className="borders-link" key={i} to={`/${border}`}> {border}</Link>)}</div></p>
								</div>)
								:
								null
							}
						</div>
					</>
				) :
				<p className="loading">Loading</p>
			}
		</div>
		</>
	)
}

export default Details

// import {useContext, useEffect, useState} from "react"
// import {useParams, Link} from "react-router-dom"
// import {MyContext} from "../context"

// const Details = () => {
// 	const { getCountry } = useContext(MyContext)
	
// 	const [country, setCountry] = useState(null)

// 	const {id} = useParams()
// 	console.log(id)

// 	useEffect(() => {
// 		const c = getCountry(id)
// 		console.log(c)
// 		setCountry(c)
// 	}, [])

// 	return(
// 		<div>
// 			{
// 				country != null ? 
// 				(<div><div>
// 				<img src={country.flag} alt={`${country.name} flag`} />
// 			</div>
// 			<div>
// 				<h3>{country.name}</h3>
// 				<div>
// 					<p><b>Native Name:</b> {country.nativeName}</p>
// 					<p><b>Population:</b> {country.population}</p>
// 					<p><b>Region:</b> {country.region}</p>
// 					<p><b>Sub-Region:</b> {country.subregion}</p>
// 					<p><b>Capital:</b> {country.capital}</p>
// 					<p><b>Top-Level:</b> {country.topLevelDomain.join()}</p>
// 					<p><b>Languages:</b> {country.languages.map((language, i) => <span key={i}> {language.name},</span>)}</p>
// 				</div>
// 				{
// 					typeof country.borders !== "undefined" ?
// 					(<div>
// 						<p><b>Borders:</b> {country.borders.map((border, i) => <Link key={i} to={`/${border}`}> {border}</Link>)}</p>
// 					</div>)
// 					:
// 					null
// 				}
// 			</div></div>)
// 			: "Loading..."

// 			}
// 		</div>
// 	)
// }

// export default Details