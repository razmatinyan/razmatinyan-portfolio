import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Testimonials from '@/components/Testimonials'
import Opportunities from '@/components/Opportunities'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Index = () => {
	return (
		<div className='relative'>
			<div className='grain-overlay' />
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Works />
			<Testimonials />
			<Opportunities />
			<Contact />
			<Footer />
		</div>
	)
}

export default Index
