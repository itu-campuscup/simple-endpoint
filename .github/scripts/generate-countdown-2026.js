const fs = require("fs");
const eventDate = new Date("2026-09-11T11:00:00Z"); // 11:00 UTC = 13:00 CEST
const now = new Date();

let timeDifference = eventDate - now;
let message;
let color;

const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
if (days > 7) {
  message = `${days} days`;
  color = "#4c1"; // Green for plenty of time
} else if (days > 1) {
  message = `${days} days`;
  color = "#fe7d37"; // Orange for soon
} else if (days === 1) {
  message = "< 24h";
  color = "#e05d44"; // Red for urgent
} else if (days == 0) {
  message = "Event Started!";
  color = "#4c1"; // Green for completed event
} else {
  message = "Has been held";
  color = "#224186"; // CC Blue
}

const badge = {
  schemaVersion: 1,
  label: "CampusCup 2026",
  message: message,
  color: color,
};

fs.writeFileSync("countdown-2026.json", JSON.stringify(badge, null, 2), "utf8");
