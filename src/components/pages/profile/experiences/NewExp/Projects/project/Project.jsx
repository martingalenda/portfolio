import { useContext } from 'react'
import { Link } from "react-router-dom"

import LangContext from '../../../../../../../context/languages'

const Project = (data) => {

    const { texts  } = useContext(LangContext);

    return(
        <div className="project__container">
            <div className="project">
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'absolute', top: '-5.2rem', width: '100%'}}>
                    <div className="project__prof" >
                        <h4 > {data.rol} </h4>
                    </div>
                    <div>
                        <img className="project__logo" src={`${data.classID}.png`} alt={data.name}/>
                    </div>
                    <div className="project__dates" >
                        <h4 > {data.dates} </h4>
                    </div>
                </div>
                

                <div style={{ marginTop: '6rem' }}>
                    <h3 className="project__title">{data.name}</h3>
                    <Link to={data.url} target="_blank">
                        <h4 className="project__site">{texts.experiences.more} <span style={{fontSize: '1.1rem'}}>{data.url.slice(8)}</span></h4>
                    </Link>
                    <div className="project__industry" >
                        <h4 > {data.industry} </h4>
                    </div>
                    <div className="project__description" dangerouslySetInnerHTML={{__html: data.description}}/>
                </div>
            </div>
        </div>
    )
}

export default Project



