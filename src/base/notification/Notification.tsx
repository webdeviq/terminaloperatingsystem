import Button from "../button/Button";
import Container from "../form/Container";
import Header from "../navigation/Header";

import classes from "./Notification.module.css";

interface Props {
  message: string;
  headerinfo: string;

  btnmessage?: string;
  externalstyles?: string;
  onClickNotificationAction?: () => void;
  buttonized: boolean;
}

const Notification: React.FC<Props> = (props: Props) => {
  const {
    message,
    btnmessage,
    headerinfo,
    externalstyles,
    buttonized,
    onClickNotificationAction,
  } = props;
  const notificationstyles = `${
    externalstyles
      ? `${externalstyles} ${classes["notification-container"]}`
      : `${classes["notification-container"]}`
  }`;
  return (
    <Container externalstyles={notificationstyles}>
      <Header externalstyles={classes["notification-header"]}>
        <span>{headerinfo}</span>
      </Header>
      <Container className={classes["message-container"]}>
        <p>{message}</p>
      </Container>
      {buttonized && (
        <Container className={classes["button-container"]}>
          <Button onClick={onClickNotificationAction}>{btnmessage}</Button>
        </Container>
      )}
    </Container>
  );
};

export default Notification;
