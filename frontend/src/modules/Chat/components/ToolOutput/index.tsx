import React from "react";
import ChatToolAppointment from "./Appointment";
import ChatToolDealerShip from "./DealerShip";
import ChatToolSchedule from "./Schedule";
import ChatToolWeather from "./Weather";

interface ToolOutputMessageProps {
  content: string;
}

const ToolOutputMessage: React.FC<ToolOutputMessageProps> = ({ content }) => {
  try {
    const parsedContent = JSON.parse(content);

    const { name } = parsedContent;

    // Same as ChatList, more flexibility for future with this approach
    switch (name) {
      case "get_weather":
        return <ChatToolWeather content={parsedContent} />;

      case "check_appointment_availability":
        return <ChatToolAppointment content={parsedContent} />;

      case "get_dealership_address":
        return <ChatToolDealerShip content={parsedContent} />;

      case "schedule_appointment":
        return <ChatToolSchedule content={parsedContent} />;

      default:
        return <div>Unknown tool output</div>;
    }
  } catch (error) {
    console.error("Error parsing tool output content", error);
  }

  return <></>;
};

export default ToolOutputMessage;
