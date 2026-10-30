
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import PropertySpotlight from './components/PropertySpotlight'
import AboutMe from './components/AboutMe'
import Affiliations from './components/Affiliations'
import Testimonials from './components/Testimonials'
import SearchBy from './components/SearchBy'
import NeighborhoodGuides from './components/NeighborhoodGuides'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <PropertySpotlight />
      <AboutMe />
      <Affiliations />
      <Testimonials />
      <SearchBy />
      <NeighborhoodGuides />
      <Footer />
    </>
  )
}

export default App