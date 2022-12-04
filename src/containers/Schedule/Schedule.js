import ScheduleElement from "../../components/ScheduleElement"

const Schedule = () => {
    return (
        <div
            className="schedule"
        >
            <div
                className="schedule__grid"
            >
                <div className="schedule__column">
                    <div>Dla uczestników</div>
                    <div>
                        <ScheduleElement 
                            time="16:00"
                            text="Pizza pizza pizza🍅"
                        />
                        <ScheduleElement 
                            time="18:00"
                            text="Start, lorem lorem, lorem, ipsu. ipsum? Lorem lorem!"
                        />
                    </div>
                </div>
                <div className="schedule__column">
                    <div>Dla zwiedzających</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Schedule