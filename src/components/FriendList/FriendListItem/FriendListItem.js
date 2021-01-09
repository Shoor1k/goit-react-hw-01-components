import s from "./FriendListItem.module.css";
import PropTypes from "prop-types";

function FriendListItem({ isOnline, avatar, name }) {
    return (
        <li className={s.item} >
            <span className={isOnline ? s.isOnline : s.isOfline}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>)

}



FriendListItem.prototype = {
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
export default FriendListItem