/* Context */
    import { useContext } from 'react';
    import LangContext from '../../../../../../context/languages';
/* Rutas */
    import { Link } from "react-router-dom";

const Project = (data) => {

    const { texts  } = useContext(LangContext);

    return(
        <div className="project">
            <img className="project__logo" src={`${data.classID}.png`} alt={data.name}/>
            <h3 className="project__title">{data.name}</h3>
            <h4 className="project__site">{data.more} <Link to={data.url} target="_blank" className="project__link"> {data.url.slice(8)}</Link></h4>
            <p className="project__description" dangerouslySetInnerHTML={{__html: data.description}}/>
            <div className="project__details" >
                <h4 > {texts.experiences.role}:<span className="details__rol"> {data.rol}</span> </h4>
                <h4 > {texts.experiences.industry}:<span className="details__rol"> {data.industry}</span> </h4>
            </div>
        </div>
    )
}

export default Project



