import Collapsible from "react-collapsible"
import Countdown from "react-countdown"
import { Icon } from '@iconify/react'

import CountdownRenderer from "../../components/CountdownRenderer"

import hex from "../../assets/hex.svg"

const Question = ({title, text}) => {
    return (
        <Collapsible
            trigger={title}
            transitionTime={100}
        >
            <p>{text}</p>
        </Collapsible>
    )
}

const FAQ = () => {
    return (
        <div
            className="faq"
        >
            <div className="faq__countdown">
                <Countdown
                    renderer={CountdownRenderer}
                    date={new Date(2023, 2, 5, 11, 0)}
                >

                </Countdown>
            </div>
            <div
                className="faq__links"
            >
                {/* <span>
                    <a href="https://forms.google.com/" target="_blank" rel="noreferrer">Formularz rejestracyjny</a>
                </span>
                <span>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer">Wydarzenie na Facebooku</a>
                </span> */}
                {/* <div> */}
                    <div>
                        <div>Formularz rejestracyjny</div>
                        <a href="https://forms.google.com/" target="_blank" rel="noreferrer">
                            <Icon icon="fluent:form-24-regular" />
                            <img src={hex} alt="" />
                        </a>
                    </div>
                    <div>
                        <div>Wydarzenie na Facebooku</div>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                        <Icon icon="fa-brands:facebook-f" />
                            <img src={hex} alt="" />
                        </a>
                    </div>
                {/* </div> */}
            </div>
            <Question
                title="Jakieś pytanie"
                text="Tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi."
            />
            <Question
                title="Jakieś pytanie"
                text="Tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi."
            />
            <Question
                title="Jakieś pytanie"
                text="Tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi."
            />
            <Question
                title="Jakieś pytanie"
                text="Tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi, tekst odpowiedzi."
            />
        </div>
    )
}

export default FAQ