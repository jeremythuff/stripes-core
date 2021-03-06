import React from 'react';
import style from './ModuleContainer.css';

const propTypes = {
  children: React.PropTypes.node.isRequired,
};

function ModuleContainer(props) {
  return (
    <div className={style.moduleContainer}>{props.children}</div>
  );
}

ModuleContainer.propTypes = propTypes;

export default ModuleContainer;
