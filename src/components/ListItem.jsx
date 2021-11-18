import {Link} from "react-router-dom"

const ListItem = ({country}) => {
	let {name, flag, population, region, capital, alpha2Code} = country
	return(
		<div className="country-card">
			<Link to={`/${alpha2Code}`}>
					<img className="single-country-img" src={flag} alt={`${name} flag`} />
					<div style={{padding: "15px 10px"}}>
						<h2>{name}</h2>
						<p><b>Population:</b> {population}</p>
						<p><b>Region:</b> {region}</p>			
						<p><b>Capital:</b> {capital}</p>
					</div>
			</Link>
		</div>
	)
}

export default ListItem