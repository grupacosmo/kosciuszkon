import kwadrat from "../../assets/kwadrat.webp"
// import wiit from "../../assets/wiit.webp"
import wrss from "../../assets/wrss.webp"
import fundacja from "../../assets/fundacja.webp"
import { Icon } from "@iconify/react"
import { useState } from "react"
import MapPortal from "../../components/MapPortal"

const Footer = () => {

    const [isMapOpen, setIsMapOpen] = useState(false)

    return (
        <>
            <div
                className="footer"
                id="kontakt"
            >
                <div
                    className="footer__grid"
                >
                    <div
                        className="footer__visit-us"
                    >
                        <h5>Odwiedź nas</h5>
                        <div>
                            <a href="https://samorzad.pk.edu.pl/" target="_blank" rel="noreferrer">
                                <img src={wrss} alt="Samorząd Studencki Politechniki Krakowskiej" />
                            </a>
                            {/* <a href="https://it.pk.edu.pl/" target="_blank" rel="noreferrer" >
                                <img src={wiit} alt="Wydział Informatyki i Telekomunikacji" />
                            </a> */}
                            <a href="https://klubkwadrat.pl/pl" target="_blank" rel="noreferrer">
                                <img src={kwadrat} alt="Klub Kwadrat" />
                            </a>
                            <a href="https://fundacjapk.com/" target="_blank" rel="noreferrer">
                                <img src={fundacja}  alt="Fundacja Samorządu Studentów Politechniki Krakowskiej" />
                            </a>
                        </div>
                    </div>
                    <div
                        className="footer__contact"
                    >
                        <h5>Kontakt</h5>
                        <ul>
                            <li><Icon icon="fa6-solid:envelope" />hackathon.pk.2022@gmail.com</li>
                            <li><Icon icon="fa6-solid:phone" />+48 789-123-125</li>
                            <li><Icon icon="fa6-solid:phone" />+48 795-773-929</li>
                        </ul>
                        <span>
                            
                        </span>
                        <button
                            type="button"
                            onClick={() => setIsMapOpen(true)}
                        >
                            <Icon icon="mdi:map-marker" /> Pokaz mapę
                        </button>
                    </div>
                    <div
                        className="footer__links"
                    >
                        <h5>Linki zewnętrzne</h5>
                        <div>
                            <div>
                                <ul>
                                    <li><a href="https://drive.google.com/file/d/1GKs2Gf_lKRk_lYXAfLcviRvcbeVVuq57/view?usp=sharing" target="_blank" rel="noreferrer">Regulamin</a></li>
                                    <li><a href="https://www.facebook.com/samorzad.wiitpk" target="_blank" rel="noreferrer">Organizatorzy</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="https://www.facebook.com/samorzad.wiitpk" target="_blank" rel="noreferrer"><Icon icon="fa-brands:facebook-f" />WRSS WIiT</a></li>
                                    <li><a href="https://www.facebook.com/cosmopk.kn" target="_blank" rel="noreferrer"><Icon icon="fa-brands:facebook-f" />Cosmo PK</a></li>
                                    <li><a href="https://www.instagram.com/wrss_wiit_pk/" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:instagram" />WRSS WIiT</a></li>
                                    <li><a href="https://www.instagram.com/cosmopk_kn/" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:instagram" />Cosmo PK</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="footer__background"
                ></div>
            </div>
            <div
                className="copyright"
            >
                Copyright © Wszelkie prawa zastrzeżone
            </div>
            <MapPortal 
                isOpen={isMapOpen}
                setIsOpen={setIsMapOpen}
            />
        </>
    )
}

export default Footer