/**
 *
 * Link Wrapper
 *
 */
import QS from 'query-string';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkWrapper = ({ to, ...props }) => {
  if (to) {
    let finalTo = to;
    if (typeof window === 'object' && typeof to === 'function') {
      finalTo = to({
        pathname: window.location.pathname,
        search: window.location.search,
        query: QS.parse(window.location.search),
      });
    }
    return <Link to={finalTo} {...props} />;
  }
  return <a {...props}>{props.children}</a>;
};

LinkWrapper.propTypes = {
  children: PropTypes.any,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};
LinkWrapper.defaultProps = {
  children: null,
  to: null,
};

export default LinkWrapper;
