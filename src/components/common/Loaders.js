import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import PropTypes from 'prop-types';

const style = {
    container: {

        left: '50%',
        top: '50%',
        position: 'fixed',
        zIndex: 10000
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};

const Loaders = ({currentStatus}) => (
    <div style={style.container}>
        <RefreshIndicator
            size={50}
            left={-15}
            top={0}
            status={currentStatus}
            style={style.refresh}
        />
    </div>
);

// Specifies the default values for props:
Loaders.defaultProps = {
    currentStatus: 'loading'
};

Loaders.propTypes = {
    currentStatus: PropTypes.string
};

export default Loaders;
