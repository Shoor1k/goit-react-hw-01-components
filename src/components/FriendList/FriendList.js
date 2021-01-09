import s from "./FriendList.module.css"
import FriendListItem from "./FriendListItem/FriendListItem";

function FriendList({ items }) {

    return (
        <ul className={s.friendList}>
            {
                items.map(item => (
                    <FriendListItem
                        key={item.id}
                        isOnline={item.isOnline}
                        avatar={item.avatar}
                        name={item.name}
                    />
                ))
            }
        </ul>
    )
};

export default FriendList