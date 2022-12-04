import kwadrat from "../../assets/kwadrat.png"
import wiit from "../../assets/wiit.png"
import wrss from "../../assets/wrss.png"
import { Icon } from "@iconify/react"

const Footer = () => {
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
                            <a href="https://it.pk.edu.pl/" target="_blank" rel="noreferrer" >
                                <img src={wiit} alt="Wydział Informatyki i Telekomunikacji" />
                            </a>
                            <a href="https://klubkwadrat.pl/pl" >
                                <img src={kwadrat} target="_blank" rel="noreferrer" alt="Klub Kwadrat" />
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

                    </div>
                    <div
                        className="footer__links"
                    >
                        <h5>Linki zewnętrzne</h5>
                        <div>
                            <div>
                                <ul>
                                    <li><a href="#">Regulamin</a></li>
                                    <li><a href="#">Organizatorzy</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="#"><Icon icon="fa-brands:facebook-f" />Facebook 1</a></li>
                                    <li><a href="#"><Icon icon="fa-brands:facebook-f" />Facebook 2</a></li>
                                    <li><a href="#"><Icon icon="fa6-brands:instagram" />Instagram 1</a></li>
                                    <li><a href="#"><Icon icon="fa6-brands:instagram" />Instagram 2</a></li>
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
                Copyright © Jakub Kubica - 2022. Some rights reserved.
            </div>
        </>
    )
}

export default Footer