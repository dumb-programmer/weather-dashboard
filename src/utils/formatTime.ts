import { DateTime } from "luxon";

export default function formatTime(
  timestamp: number,
  timezoneOffsetInSeconds: number
) {
  // Convert Unix timestamp to hours, minutes, and seconds
  const seconds = timestamp % 60;
  const minutes = Math.floor(timestamp / 60) % 60;
  const hours = Math.floor(timestamp / 3600) % 24;

  // Determine AM or PM suffix based on the hours
  const period = hours < 12 ? "AM" : "PM";

  // Convert hours from 24-hour to 12-hour format
  let formattedHours = hours % 12;
  formattedHours = formattedHours ? formattedHours : 12; // Handle midnight (0 hours) as 12 AM

  // Format the time as HH:MM:SS AM/PM
  const formattedTime = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${period}`;

  return formattedTime;
}
