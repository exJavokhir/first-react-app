import SideabrBtn from '../../components/SidebarBtn/SidebarBtn'

import './main.scss'
import{
    Over,
    Ticket,
    Ideas,
    Contact,
    Subs,
    Agents,
    Setting,
    Articles
}from '../../assets/icons/Icons'

const Sideabr = ()=>{
    return(
        <div className="sidebar">
            <div className="logo">
                <a href="javascropt:void(0)">Dashboard Kit</a>
            </div>

        <SideabrBtn title="Overview" icon={<Over/>}/>
        <SideabrBtn title="Tickets" icon={<Ticket/>}/>
        <SideabrBtn title="Ideas" icon={<Ideas/>}/>
        <SideabrBtn title="Contacts" icon={<Contact/>}/>
        <SideabrBtn title="Agents" icon={<Agents/>}/>
        <SideabrBtn title="Articles" icon={<Articles/>}/>
        <SideabrBtn title="Settings" icon={<Setting/>}/>
        <SideabrBtn title="Subscription" icon={<Subs/>}/>
        </div>
    )
}

export default Sideabr