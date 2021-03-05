import './main.scss'


const SidebarBtn = ({title, icon})=>{
    return(
        <button className="sidebar-btn">
            <span className="icon__svg">{icon}</span>
            <span className="icon__title">{title}</span>
        </button>
    )
}

export default SidebarBtn;