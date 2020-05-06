import React, {useState, useContext} from "react";
import PropTypes from 'prop-types';
import {AppContext} from './../App';

export default function Form () {

    const [userName, setUserName] = useState('');
    const appContext = useContext(AppContext);

    function handleChange({target}) {
      setUserName(target.value);
    };

    function handleSubmit(e) {
      e.preventDefault();
      appContext.addItem(userName);
      setUserName('');
    };

    return (
        <form onSubmit={handleSubmit}>
          <div className="form-box">
            <div className="form-box__item">
              <input value={userName}
              onChange={handleChange} type="text" />
              <button>Add user</button>
            </div>
          </div>
        </form>
    );
}

Form.propTypes = {
    addItem: PropTypes.func.isRequired
}