import React, { useEffect, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { useAppDispatch } from "../../../hooks/hooks";
import "./Notification.scss";

interface NotificationProps {
  message: string | null;
  type: string;
}

const Notification: React.FC<NotificationProps> = (props) => {
  const [isShown, setIsShown] = useState(true);
  const dispatch = useAppDispatch();

  setTimeout(() => {}, 4000);

  return (
    <div className={`notification ${props.type} ${isShown && " shown"}`}>
      <p>{props.message}</p>
      <BiErrorCircle className="message-icon" />
    </div>
  );
};

export default Notification;
