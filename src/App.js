import "./App.scss"

import Header from "./containers/Header"
import Hero from "./containers/Hero"
import SectionDivider from "./components/SectionDivider"
import Topic from "./containers/Topic"
import SectionGradient from "./components/SectionGradient"
// import Schedule from "./containers/Schedule"
import FAQ from "./containers/FAQ/FAQ"
import Partners from "./containers/Partners"
import Footer from "./containers/Footer"
import TopicList from "./containers/TopicList"

const App = () => {
    return (
        <div className="main">
            <Header />
            <Hero />
            <SectionDivider name="o wydarzeniu" />
            <Topic />
            <SectionGradient />
            <SectionDivider name="tematy" />
            <TopicList />
            {/* <SectionGradient /> */}
            {/* <SectionDivider name="harmonogram" /> */}
            {/* <Schedule /> */}
            <SectionGradient />
            <SectionDivider name="zapisy" />
            <FAQ />
            <SectionGradient />
            <SectionDivider name="partnerzy" />
            <Partners />
            <Footer />
        </div>
    )
}

export default App