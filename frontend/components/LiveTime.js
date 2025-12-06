"use client"

import { useState, useEffect } from "react"
import { Maximize2 } from "lucide-react"

// Time Zone Mapping
const TIME_ZONES = {
  "Eastern Time (ET)": "America/New_York",
  "Eastern Time": "America/New_York",
  "Central Time (CT)": "America/Chicago",
  "Central Time": "America/Chicago",
  "Mountain Time (MT)": "America/Denver",
  "Mountain Time": "America/Denver",
  "Pacific Time (PT)": "America/Los_Angeles",
  "Pacific Time": "America/Los_Angeles",
  "Alaska Time (AKT)": "America/Anchorage",
  "Alaska Time": "America/Anchorage",
  "Hawaii Time (HT)": "Pacific/Honolulu",
  "Hawaii Time": "Pacific/Honolulu",
  "Hawaii-Aleutian Time": "Pacific/Honolulu",
}

// Get display name for timezone
function getDisplayName(timezone) {
  if (!timezone) return "Eastern Time"
  if (timezone.includes("(")) {
    return timezone.split("(")[0].trim()
  }
  return timezone
}

export default function LiveTime({ timezone = "Eastern Time" }) {
  const [currentTime, setCurrentTime] = useState(null)

  useEffect(() => {
    const updateTime = () => {
      const timeZone = TIME_ZONES[timezone] || "America/New_York"
      const now = new Date()

      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })

      const parts = formatter.formatToParts(now)
      const hours = parts.find((p) => p.type === "hour")?.value || "12"
      const minutes = parts.find((p) => p.type === "minute")?.value || "00"
      const seconds = parts.find((p) => p.type === "second")?.value || "00"
      const period = parts.find((p) => p.type === "dayPeriod")?.value || "AM"

      const dateString = now.toLocaleDateString("en-US", {
        timeZone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })

      setCurrentTime({
        hours,
        minutes,
        seconds,
        period,
        date: dateString,
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  if (!currentTime) return null

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md relative min-w-[380px]">
      {/* Expand button - top right */}
      <button
        className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Expand"
      >
        <Maximize2 size={18} strokeWidth={1.5} />
      </button>

      {/* Timezone label */}
      <div className="text-[22px] text-[#6b7c93] font-normal mb-4 tracking-wide">{getDisplayName(timezone)}</div>

      {/* Time display - matching exact screenshot proportions */}
      <div className="flex items-baseline mb-4">
        {/* Hours and Minutes - very large */}
        <span className="text-[72px] font-bold text-[#1a1a1a] leading-none tracking-tight">
          {currentTime.hours}:{currentTime.minutes}
        </span>
        {/* Seconds - medium with colon */}
        <span className="text-[36px] font-medium text-[#1a1a1a] leading-none">:{currentTime.seconds}</span>
        {/* AM/PM - medium, slightly separated */}
        <span className="text-[28px] font-medium text-[#1a1a1a] leading-none ml-1.5">{currentTime.period}</span>
      </div>

      {/* Date - styled like timezone */}
      <div className="text-[20px] text-[#6b7c93] font-normal tracking-wide">{currentTime.date}</div>
    </div>
  )
}
