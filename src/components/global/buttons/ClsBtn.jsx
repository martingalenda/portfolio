import {Link} from 'react-router-dom'

const ClsBtn = ({children, to = "#", target}) => {
    return (
        <Link to={to} target={target} rel="noopener noreferrer"> 
           <button className="cls-btn">
               {children}
           </button>
        </Link>
    )
}

export default ClsBtn