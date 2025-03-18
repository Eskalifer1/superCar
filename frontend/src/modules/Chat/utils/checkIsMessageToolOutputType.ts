import { MessageToolOutputType } from "../types/messages";

/**
 * Checks if the provided string is a valid `MessageToolOutputType`.
 *
 * @param {string} data - The string to check.
 * @returns {boolean} `true` if the string is a valid `MessageToolOutputType`, otherwise `false`.
 */
const checkIsMessageToolOutputType = (
  data: string
): data is MessageToolOutputType => {
  return [
    "get_weather",
    "check_appointment_availability",
    "get_dealership_address",
    "schedule_appointment",
  ].includes(data);
};

export default checkIsMessageToolOutputType;
