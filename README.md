# 🔗 simple-endpoint

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/itu-campuscup/simple-endpoint/update-countdown-badge.yml?label=badge%20updates)](https://github.com/itu-campuscup/simple-endpoint/actions)

Simple endpoints that CampusCup services can use for lightweight tasks.

## 🛡️ Shields

### 🔢 Countdown

A dynamic badge that shows the countdown to CampusCup 2025.

You use it like this:

```markdown
[![Countdown](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown.json)](https://campuscup.dk)
```

Example:

[![Countdown](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown-2025.json)](https://campuscup.dk)

<details><summary>More Details</summary>
  <h4>Badge States</h4>
  <ul>
    <li><strong>Green</strong>: More than 7 days remaining </li>
    <li><strong>Orange</strong>: 1-7 days remaining </li>
    <li><strong>Red</strong>: Less than 1 day remaining </li>
    <li><strong>Green</strong>: The event has started </li>
  </ul>
  <h4>Data Source</h4>
  <ul>
    <li><strong>Endpoint</strong>: <a href="https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown-2025.json" target="_blank"> countdown-2025.json </a></li>
    <li><strong>Format</strong>: <a href="https://shields.io/endpoint" target="_blank"> Shields.io Endpoint Format </a></li>
    <li><strong>Updates</strong>: 11:02 UTC via GitHub Actions </li>
  </ul>
  <h4>Event Details</h4>
  <ul>
    <li><strong>Event</strong>: CampusCup 2025</li>
    <li><strong>Date</strong>: 2025 September 12th</li>
    <li><strong>Time</strong>: 13:00 CEST (11:00 UTC)</li>
  </ul>
</details>
