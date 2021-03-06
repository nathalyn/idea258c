import React from 'react';
import './resources.css'

const Resources = () => {
    return (
        <section className="section">
            <div className="landing-text-div">
                <h1>Resources</h1>
                <h3 className="font-weight-light">Here you’ll find tools, learning resources and much more to help you create your awesome thing.</h3>
            </div>
            <div className="resources text-left">

                <h3>Learning</h3>
            </div>
            <div>
                <div className="row text-left resource">
                    <div className="col">
                        <p className="font-weight-bold">Case Studies</p>
                        <ul className="resource-list">
                            <li>Scoping out a Project</li>
                            <li>Scoping out a Project</li>
                            <li>Scoping out a Project</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="font-weight-bold">Research</p>
                        <ul className="resource-list">
                            <li>Scoping out a Project</li>
                            <li>Scoping out a Project</li>
                            <li>Scoping out a Project</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="font-weight-bold">Visual</p>
                        <ul className="resource-list">
                            <li>Scoping out a Project</li>
                            <li>Scoping out a Project</li>
                            <li>Scoping out a Project</li>
                        </ul>
                    </div>
                    <div className="col">
                    <p className="font-weight-bold">Interaction</p>
                    <ul className="resource-list">
                        <li>Scoping out a Project</li>
                        <li>Scoping out a Project</li>
                        <li>Scoping out a Project</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Resources;