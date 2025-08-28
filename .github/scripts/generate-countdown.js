const fs = require("fs");
const eventDate = new Date("2025-09-12T11:00:00Z"); // 11:00 UTC = 13:00 CEST
const now = new Date();

let timeDifference = eventDate - now;
let message;
let color;

if (timeDifference <= 0) {
  message = "Event started!";
  color = "#4c1"; // Green for completed event
} else {
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (days > 7) {
    message = `${days} days`;
    color = "#4c1"; // Green for plenty of time
  } else if (days > 1) {
    message = `${days} days`;
    color = "#fe7d37"; // Orange for soon
  } else if (days === 1) {
    message = "1 day";
    color = "#e05d44"; // Red for urgent
  } else if (days > 0) {
    message = "Has been held";
    color = "#224186"; // CC Blue
  } else {
    message = "<24h";
    color = "#e05d44"; // Red for very urgent
  }
}

const badge = {
  schemaVersion: 1,
  label: "CampusCup 2025",
  message: message,
  color: color,
};

fs.writeFileSync("countdown.json", JSON.stringify(badge, null, 2), "utf8");
