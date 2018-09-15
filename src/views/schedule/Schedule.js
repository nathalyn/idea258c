import React from 'react';
import './schedule.css';
import ThisWeek from '../../components/this-week/ThisWeek'

const Schedule = () => {
  
    const scheduleData = [
        {
            date: '8/30',
            topic: 'Course Intro, What is Product Design?',
            assignment: 'Problem Exploration'
        },
        {
            date: '9/06',
            topic: 'Problem definition, Scoping A Project',
            assignment: 'Problem Scope'
        },
        {
            date: '9/13',
            topic: 'User Research, Asking the right questions',
            assignment: 'Research Methodology'
        },
        {
            date: '9/20',
            topic: 'Design Tools: Sketch & Figma',
            assignment: 'Daily UI'
        },
        {
            date: '9/27',
            topic: 'Wireframing & Low-fidelity mockups',
            assignment: 'Finalize Wireframes'
        },
        {
            date: '10/04',
            topic: 'Guest Lecture: Presenting & Critiquing work',
            assignment: 'Work on midpoint presentations'
        },
        {
            date: '10/11',
            topic: 'Midpoint presentations',
            assignment: 'TBD'
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
