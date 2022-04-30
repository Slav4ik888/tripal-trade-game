import PropTypes from 'prop-types';
import cl from 'classnames';
import s from './index.module.scss';


const Container = ({ children, className }) => {
  return (
    <div className={cl(s.root, className)}>
      {
        children
      }
    </div>
  )
};

Container.propTypes = {
  children  : PropTypes.node.isRequired,
  className : PropTypes.string
};

export default Container;