import "./App.scss"

import Header from "./containers/Header"
import Hero from "./containers/Hero"
import SectionDivider from "./components/SectionDivider"
import Topic from "./containers/Topic"

const App = () => {
    return (
        <div className="main">
            <Header />
            <Hero />
            <SectionDivider name="temat" />
            <Topic />
        </div>
    )
}

export default App