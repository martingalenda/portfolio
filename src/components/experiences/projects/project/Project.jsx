const Project = (data) => {

    return(
        <div className="project">
            <img className="project__logo" src={`${data.classID}.png`} alt={data.name}/>
            <h3 className="project__title">{data.name}</h3>
            <h4 className="project__site">{data.more} <a href={data.url} target="_blank" className="project__link"> {data.url.slice(8)}</a></h4>
            <p className="project__description" dangerouslySetInnerHTML={{__html: data.description}}/>
            <div className="project__details" >
                <h4 > Role:<span className="details__rol"> {data.rol}</span> </h4>
                <h4 > Industry:<span className="details__rol"> {data.industry}</span> </h4>
            </div>
        </div>
    )
}

export default Project



