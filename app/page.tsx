import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { Fragment } from 'react'
import MenuItem from './components/MenuItem'


export default function Home() {
	return (
		<Fragment>
			<Navbar />
			<Menu />
			<Footer />
		</Fragment>
	)
}
