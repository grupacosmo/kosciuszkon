import Collapsible from "react-collapsible"

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