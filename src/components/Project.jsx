const Project = (props) => {
    return (
        <div className="projectContainer" onClick={props.onClick}>
            <div className="leftCol">
                <div className="img-container">
                    <img src={props.data.img} alt="" />
                </div>
            </div>
            <div className="rightCol">
                <p className="projectTitle">{props.data.title}</p>
                <p className="projectDescription">
                    {props.data.description}
                </p>
            </div>
        </div>
    )
}

export default Project