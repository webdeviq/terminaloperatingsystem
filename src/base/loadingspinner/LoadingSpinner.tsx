import React from "react";
import Container from "../form/Container.tsx";
import classes from "./LoadingSpinner.module.css";

interface Props {
  loadingtext: string;
}

const LoadingSpinner: React.FC<Props> = (props: Props) => {
  const { loadingtext } = props;
  

  return (
    <React.Fragment>
      <Container externalstyles={classes["loading-spinner-container"]}></Container>
      <p className={classes["loading-spinner-text"]}>{loadingtext}</p>
    </React.Fragment>
  );
};

export default LoadingSpinner;
