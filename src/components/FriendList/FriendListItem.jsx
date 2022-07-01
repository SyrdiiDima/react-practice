

import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

function FriendListItem({ isOnline, avatar, name }) {
    const onlineStyle = css.status + ' ' + css.is_online;
    const offlineStyle = css.status + ' ' + css.is_offline;
  
  
  return (

    <li className={css.item}>
  <span className={isOnline ? onlineStyle : offlineStyle}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>
   
  );
}



FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;