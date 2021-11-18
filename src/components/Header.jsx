import {useContext} from "react"
import {Link} from "react-router-dom"
import {MyContext} from "../context"

const Header = () => {

	const {setModeFunc} = useContext(MyContext)

	return(
		<header>
			<div className="container flex justify-between items-center">
				<Link to="/"><h2>Where in the world?</h2></Link>
				<div className="flex items-center gap-1 dark-mode" onClick={setModeFunc}>
					<i className="far fa-moon"></i>
					<button className="btn">Dark Mode</button>
				</div>
			</div>
		</header>
	)
}

export default Header