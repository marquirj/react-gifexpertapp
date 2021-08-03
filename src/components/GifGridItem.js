import React from 'react';
import PropTypes from 'prop-types';
export const GifGridItem = ({id,title,url} ) => {
    //console.log(img);
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} />
            <p>{title}</p>

        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


/**
 * 1. Enzyme
 * 2. Enzyme to json
 * 3. debe de mostrar el componente correctamente
 *  *shallow
 *  *wrapper
 *  *wrapper.toMatchSnapshot()
 */