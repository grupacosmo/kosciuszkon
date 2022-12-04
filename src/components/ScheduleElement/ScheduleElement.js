const ScheduleElement = ({ time, text }) => {
    return (
        <div
            className="schedule-element"
        >
            <div
                className="schedule-element__chevron"
            >

            </div>
            <div
                className="schedule-element__content"
            >
                <div>{time}</div>
                <div>{text}</div>
            </div>
        </div>
    )
}

export default ScheduleElement
