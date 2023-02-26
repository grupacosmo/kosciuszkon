import { useState } from 'react';
import { Icon } from '@iconify/react';

import { scheduleData } from "./scheduleData"

const Schedule = () => {

    const [scheduleType, setScheduleType] = useState("hackathon")

    const handleScheduleTypeChange = () => {
        if (scheduleType === "hackathon") {
            setScheduleType("workshop")
        } else {
            setScheduleType("hackathon")
        }
    }

    const ScheduleElement = ({data}) => {
        return (
            <div
                className="schedule__element"
            >
                <div>{data.title}</div>
                <div>{data.time}</div>
                <div>{data.description}</div>
            </div>
        )
    }

    return (
        <div
            className="schedule"
        >
           <div className="schedule__controls">
                <div
                    onClick={handleScheduleTypeChange}
                >
                    <Icon icon="material-symbols:arrow-left-sharp" />
                </div>
                <div>
                    {
                        scheduleType === "hackathon" ? "Hackathon" : "Warsztaty"
                    }
                </div>
                <div
                    onClick={handleScheduleTypeChange}
                >
                    <Icon icon="material-symbols:arrow-right-sharp" />
                </div>
           </div>
           <div
                className="schedule__schedule"
           >
                <div>
                    <div>Niedziela</div>
                    <div>
                        {
                            scheduleType === "hackathon" ?
                            scheduleData.hackathon.sunday.map(e => (
                                <ScheduleElement 
                                    data={e}
                                />
                            )) : scheduleData.workshop.sunday.map(e => (
                                <ScheduleElement 
                                    data={e}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div>Poniedziałek</div>
                    <div>
                        {
                            scheduleType === "hackathon" ?
                            scheduleData.hackathon.monday.map(e => (
                                <ScheduleElement 
                                    data={e}
                                />
                            )) : scheduleData.workshop.monday.map(e => (
                                <ScheduleElement 
                                    data={e}
                                />
                            ))
                        }
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Schedule