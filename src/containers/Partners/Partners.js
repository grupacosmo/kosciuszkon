// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// tech partners
import forprogrammers from "../../assets/partners/tech/4programmers.png"
import hitachi from "../../assets/partners/tech/hitachi.svg"
import itechart from "../../assets/partners/tech/itechart.png"
import sabre from "../../assets/partners/tech/sabre.png"
import softserve from "../../assets/partners/tech/softserve.png"

// media partners
import crossweb from "../../assets/partners/media/crossweb.png"
import solidjobs from "../../assets/partners/media/solidjobs.png"
import studentnews from "../../assets/partners/media/studentnews.png"

// const Partner = ({ idx }) => {
//     return (
//         <div
//             className="partner"
//         >
//             <div
//                 className="partner__outter"
//             >
//                 <div
//                     className="partner__inner"
//                 >
//                     {idx}
//                 </div>
//             </div>
//         </div>
//     )
// }

const techPartnerData = [
    {
        img: sabre,
        link: "https://www.sabre.com/locations/poland/careers/",
        partnerName: "Sabre",
        customClass: "sabre"
    }, {
        img: hitachi,
        link: "https://www.facebook.com/hitachienergy.global",
        partnerName: "Hitachi Energy",
        customClass: "hitachi"
    }, {
        img: itechart,
        link: "https://join.itechart.com/",
        partnerName: "iTechArt",
        customClass: "itechart"
    }, {
        img: forprogrammers,
        link: "https://4programmers.net/",
        partnerName: "4programmers",
        customClass: "forprogrammers"
    }, {
        img: softserve,
        link: "https://career.softserveinc.com/poland",
        partnerName: "SoftServe",
        customClass: "softserve"
    }
]

const mediaPartnerData = [
    {
        img: crossweb,
        link: "https://crossweb.pl/",
        partnerName: "Crossweb",
        customClass: "crossweb"
    }, {
        img: solidjobs,
        link: "https://solid.jobs/offers/it",
        partnerName: "SOLID.Jobs",
        customClass: "solidjobs"
    }, {
        img: studentnews,
        link: "https://www.studentnews.pl",
        partnerName: "Grupa StudentNews",
        customClass: "studentnews"
    }
]

const PartnerElement = ({img, link, partnerName, customClass}) => {
    return (
        <div
            className={`partners__element ${customClass}`}
        >
            <a href={link} target="_blank" rel="noreferrer" aria-label={partnerName}>
                <img src={img} alt={partnerName}/>
            </a>
        </div>
    )
}

const Partners = () => {
    return (
        <div
            className="partners"
        >
            {/* <Slider
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
            </Slider> */}
            <div
                className="partners__grid tech"
            >
                {
                    techPartnerData.map(e => (
                        <PartnerElement 
                            img={e.img}
                            link={e.link}
                            partnerName={e.partnerName}
                            customClass={e.customClass}
                        />
                    ))
                }
            </div>
            <div
                className="partners__grid media"
            >
                {
                    mediaPartnerData.map(e => (
                        <PartnerElement 
                            img={e.img}
                            link={e.link}
                            partnerName={e.partnerName}
                            customClass={e.customClass}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Partners
