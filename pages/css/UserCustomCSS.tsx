import {useState} from "react";
// import './UserCustomCSS.scss'


const UserCustomCSS = () => {
    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return <div className={'user-custom-css'}>
        <button className={toggle ? 'blue': 'yellow'} onClick={handleClick}>
            {toggle ? "blue" : 'yellow'}
        </button>
    </div>
}
export default UserCustomCSS