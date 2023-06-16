import React from 'react'

const BioData = (props) => {
    return (
        <div className="bio-data">
            <h2>Biodata of {props.name}</h2>
            <div className="personal-info" >
                <h2>Personal Info of {props.name}</h2>
                <p>
                    Name: {props.name}
                </p>
                <p>
                    Email: {props.email}
                </p>
                <p>
                    Phone: {props.mobile}
                </p>
            </div>
            <div className="social-info">
                <h2>Social info of {props.name}</h2>
                <p>
                    LinkedIn: {props.linkedIn}
                </p>
                <p>
                    Github: {props.github}
                </p>
                <p>
                    Twitter: {props.twitter}
                </p>
            </div>
            <div className="interests" >
                <h2>Interests of {props.name}</h2>
                <ul>
                    {props.interests.map(interest => (
                        <li>
                            {interest}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BioData