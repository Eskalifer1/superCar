export type StreamResponseKey =
  | "USER"
  | "AI"
  | "TOOL_USE"
  | "TOOL_OUTPUT"
  | "CHUNK"
  | "END";

export type MessageType =
  | "tool_output"
  | "user"
  | "ai"
  | "tool_use"
  | "chunk"
  | "end";

export type MessageToolOutputType =
  | "get_weather"
  | "check_appointment_availability"
  | "get_dealership_address"
  | "schedule_appointment";

export interface Message {
  content: string;
  type: MessageType;
}

export interface WeatherOutput {
  output: string;
  name: "get_weather";
}

export interface AppointmentOutput {
  output: string;
  name: "check_appointment_availability";
}

export interface DealerShipOutput {
  output: string;
  name: "get_dealership_address";
}

export interface ScheduleOutput {
  output: string;
  name: "schedule_appointment";
}

export interface ScheduleParsedOutput {
  confirmacion_id: string;
  fecha: string;
  hora: string;
  modelo: string;
  mensaje: string;
}
