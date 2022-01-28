import Test from '../../styles/ScssTest.module.scss'
import {useState} from "react";

const ClassNameTest = () => {
    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className={Test["btn-wrapper"]}>
        <button
            type="button"
            onClick={handleClick}
            className={`${toggle? Test.primary : Test.another}`}
        >
            {toggle ? "primary" : "another"}
        </button>
        </div>
    )
}
export default ClassNameTest