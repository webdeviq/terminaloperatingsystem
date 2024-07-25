import { ReactNode } from "react";

import { useAppSelector } from "../../store";
import Container from "../form/Container";
import classes from "./Footer.module.css";

const Footer = () => {
  const { entity, quantityOfEntity } = useAppSelector(
    (state) => state.footerSlice
  );
  const pluralQuantity: string = quantityOfEntity > 1 ? "s" : "";
  const entityQuantitySpan: ReactNode = quantityOfEntity > 0 && (
    <Container externalstyles={classes["qty-detail-container"]}>
      <p> {`${quantityOfEntity} ${entity}${pluralQuantity} Displayed`}</p>
    </Container>
  );
  return (
    <footer className={classes["footer"]}>
      <Container externalstyles={classes["logo-container"]}>
        <span>Terminal Operating System</span>
      </Container>
      {entityQuantitySpan}
    </footer>
  );
};

export default Footer;
