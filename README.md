# 🔗 simple-endpoint

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/itu-campuscup/simple-endpoint/update-countdown-badge.yml?label=badge%20updates)](https://github.com/itu-campuscup/simple-endpoint/actions)

Simple endpoints that CampusCup services can use for lightweight tasks.

## 🛡️ Shields

### 🔢 Countdown

Dynamic badges that show countdowns to CampusCup events.

- [Countdown 2026](#campuscup-2026)
- [Countdown 2025](#campuscup-2025-past-event)
- [More Details](#more-details)

#### CampusCup 2026

```markdown
[![Countdown](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown-2026.json)](https://campuscup.dk)
```

Example:

[![Countdown](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown-2026.json)](https://campuscup.dk)

#### CampusCup 2025 (Past Event)

```markdown
[![Countdown](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown-2025.json)](https://campuscup.dk)
```

Example:

[![Countdown](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown-2025.json)](https://campuscup.dk)

<details><summary><h4>More Details</h4></summary>
  Badge States
  <ul>
    <li><strong>Green</strong>: More than 7 days remaining </li>
    <li><strong>Orange</strong>: 1-7 days remaining </li>
    <li><strong>Red</strong>: Less than 1 day remaining </li>
    <li><strong>Blue</strong>: The event has been held </li>
  </ul>
  <h4>Data Sources</h4>
  <ul>
    <li><strong>CampusCup 2026</strong>: <a href="https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown-2026.json" target="_blank"> countdown-2026.json </a></li>
    <li><strong>CampusCup 2025</strong>: <a href="https://raw.githubusercontent.com/itu-campuscup/simple-endpoint/main/countdown-2025.json" target="_blank"> countdown-2025.json </a></li>
    <li><strong>Format</strong>: <a href="https://shields.io/endpoint" target="_blank"> Shields.io Endpoint Format </a></li>
    <li><strong>Updates</strong>: 11:02 UTC via GitHub Actions </li>
  </ul>
  <h4>Event Details</h4>
  <ul>
    <li><strong>CampusCup 2026</strong>: September 2026 (TBD)</li>
    <li><strong>CampusCup 2025</strong>: September 12th, 2025 at 13:00 CEST (Completed)</li>
  </ul>
</details>
