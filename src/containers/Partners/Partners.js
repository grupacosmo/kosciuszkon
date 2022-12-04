import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = ({ idx }) => {
    return (
        <div
            className="partner"
        >
            <div
                className="partner__outter"
            >
                <div
                    className="partner__inner"
                >
                    {idx}
                </div>
            </div>
        </div>
    )
}

const Partners = () => {
    return (
        <div
            className="partners"
        >
            <Slider
                dots={false}
                infinite={true}
                speed={300}
                slidesToScroll={2}
                slidesToShow={3}
                // autoplay={true}
                autoplaySpeed={3000}
                responsive={[
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 3
                        }
                    }
                ]}
            >
                {
                    (new Array(6).fill("")).map((e, idx) => (
                        <div>
                            <Partner 
                                idx={idx}
                            />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Partners
