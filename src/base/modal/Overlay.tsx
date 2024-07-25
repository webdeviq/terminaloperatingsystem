import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

import classes from "./Overlay.module.css";

interface ModalProps {
  onClick?: () => void;
  children?: ReactNode;
  externalstyles?: string;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const modalstyles = `${
    props.externalstyles
      ? `${classes["overlay-layer"]} ${props.externalstyles}`
      : `${classes["overlay-layer"]}`
  }`;

  console.log(props.externalstyles);
  return <div onClick={props.onClick} className={modalstyles}></div>;
};

const Overlay: React.FC<ModalProps> = (props: ModalProps) => {
  const { onClick, children, externalstyles } = props;

  return (
    <React.Fragment>
      {createPortal(
        <Modal onClick={onClick} externalstyles={externalstyles} />,
        document.getElementById("overlay")!
      )}
      {createPortal(
        <>{children}</>,
        document.getElementById("children-layer")!
      )}
    </React.Fragment>
  );
};

export default Overlay;
