import React from "react";
interface EventsProps {
  event: string;
  color: string;
  location?: string;
}

const Event: React.FC<EventsProps> = (props): JSX.Element => {
  return(
    <td className={'Event ' + props.color}>
      <h5>{props.event}</h5>
      <h6>{props.location}</h6>
    </td>
  )
}

export default Event;