import "./App.scss"

import Header from "./containers/Header"
import Hero from "./containers/Hero"
import SectionDivider from "./components/SectionDivider"
import Topic from "./containers/Topic"
import SectionGradient from "./components/SectionGradient"
import Schedule from "./containers/Schedule"
import FAQ from "./containers/FAQ/FAQ"

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
        </div>
    )
}

export default App