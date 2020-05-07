import React, {useContext} from "react";
import PropTypes from 'prop-types';
import {AppContext} from './../App';
import {Wrapper} from './Styled';

export default function Cart (props) {
    const appContext = useContext(AppContext);

    return (
      <Wrapper>
        <div className="cart">
          <h3>{props.item.name}</h3>
          <p>{props.item.login}</p>
          <img src={props.item.avatar_url} alt="avatar img" />
          <button className="delete-button"
            onClick={() => appContext.removeItem(props.item.id)}>Delete user</button>
        </div>
      </Wrapper>
    );
}

Cart.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired
  })
};