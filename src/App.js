import "./App.scss"

import Header from "./containers/Header"
import Hero from "./containers/Hero"
import SectionDivider from "./components/SectionDivider"
import Topic from "./containers/Topic"
import SectionGradient from "./components/SectionGradient"
import Schedule from "./containers/Schedule"
import FAQ from "./containers/FAQ/FAQ"
import Partners from "./containers/Partners"
import Footer from "./containers/Footer"

const App = () => {
    return (
        <div className="main">
            <Header />
            <Hero />
            <SectionDivider name="temat" />
            <Topic />
            <SectionGradient />
            <SectionDivider name="harmonogram" />
            <Schedule />
            <SectionGradient />
            <SectionDivider name="faq" />
            <FAQ />
            <SectionGradient />
            <SectionDivider name="partnerzy" />
            <Partners />
            <Footer />
        </div>
    )
}

export default App