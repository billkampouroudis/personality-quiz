import React from "react";
import styles from "./basicLayout.module.scss";
import PropTypes from "prop-types";

const BasicLayout = (props) => {
  const { children } = props;

  return (
    <div className={styles.outerWrapper}>
      <main>{children}</main>
    </div>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
