import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Topic = () => {
    return (
        <div
            className="topic"
        >
            <Carousel
                showArrows={true}
                autoPlay
                infiniteLoop
            >
                <div key="slide1" className="topic__slide">
                    <h2>Topic1</h2>
                </div>
                <div key="slide2" className="topic__slide">
                    <h2>Topic2</h2>
                </div>
                <div key="slide3" className="topic__slide">
                    <h2>Topic3</h2>
                </div>
            </Carousel>
        </div>
    )
}

export default Topic