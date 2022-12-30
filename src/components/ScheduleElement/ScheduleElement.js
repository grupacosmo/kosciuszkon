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
                <div>
                    

                    <svg viewBox="0 0 56 18">
                        <text x="5" y="15">{time}</text>
                    </svg>


                </div>
                {/* <div>{time}</div> */}
                <div>{text}</div>
            </div>
        </div>
    )
}

export default ScheduleElement
