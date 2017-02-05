import React from 'react';

function ListItem(props) {
  const name = props.name;
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label" htmlFor={name}>
        {name}
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          placeholder="Name"
          className="form-control"
          id={name}
          onChange={props.updater}
        />
      </div>
    </div>
  );
}

ListItem.propTypes = {
  name: React.PropTypes.string,
  updater: React.PropTypes.func,
};

export default ListItem;
