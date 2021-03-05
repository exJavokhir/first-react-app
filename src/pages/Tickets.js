import Sidebar from '../containers/Sidebar/Sidebar'
import './main.scss';

const Tickets = ()=>{
    return(
        <div className="tickets">
            <Sidebar/>
            <div className="contents">
                <h1>Tickets contents</h1>
            </div>
        </div>
    )
}

export default Tickets;
