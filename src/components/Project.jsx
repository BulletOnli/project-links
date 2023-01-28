const Project = (props) => {
    return (
        <div className="project-container" onClick={props.onClick}>
            <div className="left-col">
                <div className="img-container">
                    <img src={props.data.img} alt="" />
                </div>
            </div>
            <div className="right-col">
                <p className="project-title">{props.data.title}</p>
                <p className="project-description">
                    {props.data.description}
                </p>
            </div>
        </div>
    )
}

export default Project