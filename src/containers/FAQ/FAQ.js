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
                        <a href="https://www.facebook.com/events/545483540957513/" target="_blank" rel="noreferrer">
                        <Icon icon="fa-brands:facebook-f" />
                            <img src={hex} alt="" />
                        </a>
                    </div>
                {/* </div> */}
            </div>
            <Question
                title="Kiedy, co i gdzie to się odbywa?"
                text="Zarówno Hackcathon, jak i wszystkie konferencje i targi pracy odbywają się 5-6 marca w Krakowie w Klubie Kwadrat. Wydarzenie rozpoczyna się od 11:00, sam Hackathon około godziny 15:00. Harmonogram będzie regularnie aktualizowany, więc prosimy o śledzenie zmian."
            />
            <Question
                title="Czy na wydarzenie obowiązują zapisy? I kto może się zapisać?"
                text="Zapisy są na Hackathon, o których rozpoczęciu będziemy informować. Mogą obowiązywać zapisy na niektóre konferencje - szczegóły również pojawią się na stronie WWW i stronie wydarzenia."
            />
            <Question
                title="Czy mogę się zapisać samemu, czy muszę mieć drużynę?"
                text="Na Hackathon może się zapisać się zarówno drużynowo, jak i samemu. W przypadku zapisu samemu będziemy informować o sposobie dobierania drużyn."
            />
            <Question
                title="Czy udział w wydarzeniu jest bezpłatny?"
                text="Tak, zarówno w Hackathonie, jak i we wszystkich konferencjach i atrakcjach. Warunkiem uczestnictwa może być konieczność wcześniejszej rejestracji."
            />
            <Question
                title="Czy turniej jest dla mnie?"
                text="Jeśli choć trochę miałeś styczności z programowanie albo masz inne umiejętności, które twoim zdaniem mogą być niezbędne do stworzenia ciekawej aplikacji, to oczywiście że tak. Nie bój się spróbować, nic to nie kosztuje, a masz szansę zgarnąć fajne nagrody."
            />
            <Question
                title="Co muszę mieć ze sobą?"
                text="Laptop i zasilacz, ewentualnie powerbanki (w razie awarii) to absolutna konieczność. Przydatne może być też założenie sobie konta na platformie GitHub.
                Przygotuj się na 24 godzinny maraton programowania, dlatego warto też zadbać o ewentualny wypoczynek. Na wydarzeniu będzie sala, na której będzie można odpocząć i uciąć drzemkę. 
                Chyba nie musimy wspominać o dużej porcji motywacji i pomysłów na projekt? "
            />
            <Question
                title="A co z jedzeniem?"
                text="Dla uczestników turnieju będzie zapewnione jedzenie: pizze, jeden ciepły posiłek, napoje i energetyki. Dodatkowo na miejscu będzie możliwość kupienia sobie dodatkowych przekąsek."
            />
            <Question
                title="Kto może wziąć udział w wydarzeniu?"
                text="Uczestnicy Hackathonu muszą być pełnoletnie osoby ze statusem studenta. Natomiast na same wydarzenie zapraszamy wszystkich zainteresowanych, niezależnie od wieku."
            />
            <Question
                title="Ile osób może mieć drużyna?"
                text="Drużyny mogą liczyć od 2 do 4 osób."
            />
            <Question
                title="Mam inne pytanie"
                text="Napisz do nas w wiadomości email: hackathon.pk.2022@gmail.com lub na facebooku. Ktoś z naszego teamu z chęcia rozwieje wszelkie wątpliwości."
            />
        </div>
    )
}

export default FAQ
