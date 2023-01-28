import React, { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";

import "./Notification.scss";

interface NotificationProps {
  message: string | null;
  type: string;
}

const Notification: React.FC<NotificationProps> = (props) => {
  const [isShown, setIsShown] = useState(true);

  return (
    <div className={`notification ${props.type} ${isShown && " shown"}`}>
      <p>{props.message}</p>
      <BiErrorCircle className="message-icon" />
    </div>
  );
};

export default Notification;
