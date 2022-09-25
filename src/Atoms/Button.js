import { NavLink } from "react-router-dom";

const Button = (props) => {
    return (
        <>
            <NavLink to="/Create">
                <button className={props.classes}>{props.text}</button>
            </NavLink>
        </>);
}

export default Button;