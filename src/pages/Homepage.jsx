import About from '../components/About/About';
// import FeatureMenu from '../components/FeatureMenu/FeatureMenu';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Specials from '../components/Specials/Specials';
import Testimonials from '../components/Testimonials/Testimonials';

const Homepage = () => {
	return (
		<>
			<Header />
			<Hero />
			<Specials />
			{/* <FeatureMenu /> */}
			<About />
			<Testimonials />
			<Footer />
		</>
	);
};

export default Homepage;
