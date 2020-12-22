import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.loader}</div> 
        </div>
    );
};

Spinner.defaultProps = {
    loader: 'Loading...'
};

export default Spinner;