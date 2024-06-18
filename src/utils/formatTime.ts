export default function formatTime(
  timestamp: number,
  timezoneOffsetInSeconds: number
) {
  // Convert the Unix timestamp to milliseconds
  const date = new Date(timestamp * 1000);

  // Calculate the offset in milliseconds
  const offsetInMilliseconds = timezoneOffsetInSeconds * 1000;

  // Adjust the date object by the offset
  const adjustedDate = new Date(date.getTime() + offsetInMilliseconds);

  // Format the adjusted date to HH:MM:SS
  const hours = adjustedDate.getUTCHours().toString().padStart(2, "0");
  const minutes = adjustedDate.getUTCMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}
