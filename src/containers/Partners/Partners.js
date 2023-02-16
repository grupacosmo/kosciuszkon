// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// honorary partners
import fut from "../../assets/partners/media/fut.png"

// gold partner
import sabre from "../../assets/partners/tech/sabre.png"

// silver partners
import forprogrammers from "../../assets/partners/tech/4programmers.png"
import hitachi from "../../assets/partners/tech/hitachi.svg"
import softserve from "../../assets/partners/tech/softserve.png"
import ericsson from "../../assets/partners/tech/ericsson.png"

// event partners
import itechart from "../../assets/partners/tech/itechart.png"

// media partners
import crossweb from "../../assets/partners/media/crossweb.png"
import solidjobs from "../../assets/partners/media/solidjobs.png"
import studentnews from "../../assets/partners/media/studentnews.png"
import kms from "../../assets/partners/media/kms.png"
import futurelab from "../../assets/partners/media/futurelab.png"

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

const honoraryPartnerData = [
    {
        img: fut,
        link: "https://fut.edu.pl/",
        partnerName: "Forum Uczelni Technicznych",
        customClass: "fut"
    }
]

const goldPartnerData = [
    {
        img: sabre,
        link: "https://www.sabre.com/locations/poland/careers/",
        partnerName: "Sabre",
        customClass: "sabre"
    }
]

const silverPartnerData = [
    {
        img: hitachi,
        link: "https://www.facebook.com/hitachienergy.global",
        partnerName: "Hitachi Energy",
        customClass: "hitachi"
    }, {
        img: softserve,
        link: "https://career.softserveinc.com/poland",
        partnerName: "SoftServe",
        customClass: "softserve"
    }, {
        img: ericsson,
        link: "https://www.ericsson.com/en",
        partnerName: "Ericsson",
        customClass: "ericsson"
    }
]

const eventPartnerData = [
    {
        img: itechart,
        link: "https://join.itechart.com/",
        partnerName: "iTechArt",
        customClass: "itechart"
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
    }, {
        img: kms,
        link: "https://kms.org.pl/",
        partnerName: "Kraków Miastem Startupów",
        customClass: "kms"
    }, {
        img: forprogrammers,
        link: "https://4programmers.net/",
        partnerName: "4programmers",
        customClass: "forprogrammers"
    }, {
        img: futurelab,
        link: "https://futurelab.pk.edu.pl/",
        partnerName: "FutureLab PK",
        customClass: "futurelab"
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

const PartnerCategory = ({ categoryName }) => {
    return (
        <div
            className="partners__category"
        >
            {categoryName}
        </div>
    )
}

const PartnerGrid = ({partnerArray, customClass}) => {
    return (
        <div
            className={`partners__grid ${customClass}`}
        >
            {
                partnerArray.map(e => (
                    <PartnerElement 
                        img={e.img}
                        link={e.link}
                        partnerName={e.partnerName}
                        customClass={e.customClass}
                    />
                ))
            }
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
            <PartnerCategory categoryName="Partnerzy honorowi" />
            <PartnerGrid partnerArray={honoraryPartnerData} customClass="honorary" />
            <PartnerCategory categoryName="Złoty partner" />
            <PartnerGrid partnerArray={goldPartnerData} customClass="gold" />
            <PartnerCategory categoryName="Srebrni partnerzy" />
            <PartnerGrid partnerArray={silverPartnerData} customClass="silver" />
            <PartnerCategory categoryName="Partnerzy wydarzenia" />
            <PartnerGrid partnerArray={eventPartnerData} customClass="event" />
            <PartnerCategory categoryName="Patroni medialni" />
            <PartnerGrid partnerArray={mediaPartnerData} customClass="media" />
        </div>
    )
}

export default Partners
