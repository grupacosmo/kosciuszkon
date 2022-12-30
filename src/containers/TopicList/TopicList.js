import { Carousel } from "react-responsive-carousel"
import { Icon } from "@iconify/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopicList = () => {
    return (
        <div
            className="topic-list"
        >
            <div
                className="topic-list__block"
            >
                <div>
                    <Icon icon="fluent-emoji-high-contrast:locked" />
                </div>
                <h3>
                    Tematy turnieju zostaną wkrótce ogłoszone!
                </h3>
            </div>
            <Carousel
                showArrows={true}
                autoPlay
                infiniteLoop
                showThumbs={false}
            >
                <div key="slide1" className="topic-list__slide">
                    <h2>Temat 1</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div key="slide2" className="topic-list__slide">
                    <h2>Temat 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </Carousel>
        </div>
    )
}

export default TopicList