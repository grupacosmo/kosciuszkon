import { zeroPad } from "react-countdown"
import hex90 from "../../assets/hex90.svg"

const ColumnColon = () => {
    return (
        <div
            className="countdown-rendered__column countdown-renderer__column--colon"
        >
            :    
        </div>
    )
}

const ColumnValue = ({name, number}) => {
    const paddedNumber = zeroPad(number)
    const left = paddedNumber[0]
    const right = paddedNumber[1]

    return (
        <div
            className="countdown-renderer__column"
        >
            <div>{name}</div>
            <div
                className="countdown-renderer__numbers"
            >
                {/* <div>{left}</div>
                <div>{right}</div> */}
                <div>
                    <div>{left}</div>
                    <img src={hex90} alt="" />
                </div>
                <div>
                    <div>{right}</div>
                    <img src={hex90} alt="" />
                </div>
            </div>
        </div>
    )
}

const CountdownRenderer = ({ days, hours, minutes, seconds, completed}) => {

    if (completed) {
        return (
            <div>
                <h3>
                    Wydarzenie rozpoczęte!
                </h3>
            </div>
        )
    }

    return (
        <>
            <div
                className="countdown-renderer__title"
            >
                Do wydarzenia zostało:
            </div>
            <div
                className="countdown-renderer"
            >
                <ColumnValue name="Dni" number={days} />
                <ColumnColon />
                <ColumnValue name="Godzin" number={hours} />
                <ColumnColon />
                <ColumnValue name="Minut" number={minutes} />
                <ColumnColon />
                <ColumnValue name="Sekund" number={seconds} />
            </div>
        </>
    )
}

export default CountdownRenderer