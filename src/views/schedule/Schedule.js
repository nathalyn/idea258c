import React from 'react';
import './schedule.css';
import ThisWeek from '../../components/this-week/ThisWeek'

const Schedule = () => {

    const scheduleData = [
        {
            date: '8/30',
            topic: 'Scoping out a project',
            assignment: 'Scoping out a project'
        },
        {
            date: '8/30',
            topic: 'Scoping out a project',
            assignment: 'Scoping out a project'
        },
        {
            date: '8/30',
            topic: 'Scoping out a project',
            assignment: 'Scoping out a project'
        },
    ]

    const renderScheduleData = (data) => {
        return (data.map((week, index) => (
            <tr key={index}>
                <td scope="row">{week.date}</td>
                <td>{week.topic}</td>
                <td>{week.assignment}</td>
            </tr>
        )));
    }
    return (
        <section className="section">
            <div className="landing-text-div schedule-landing">
                <h3 className="text-center font-weight-light">Check the schedule regularly to keep up with learning goals and assignments.</h3>
            </div>
            <div>
                <ThisWeek />
            </div>
            <div>
                <h2 className="text-left">Schedule</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderScheduleData(scheduleData)}
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default Schedule;
