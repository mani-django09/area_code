"use client"

import { useState, useEffect, memo } from "react"

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

function LiveTime({ timezone = "Eastern Time" }) {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(null)

  useEffect(() => {
    setMounted(true)
    
    const updateTime = () => {
      const timeZone = TIME_ZONES[timezone] || "America/New_York"
      const now = new Date()

      try {
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
      } catch (err) {
        // Fallback for invalid timezone
        setCurrentTime({
          hours: now.getHours().toString().padStart(2, '0'),
          minutes: now.getMinutes().toString().padStart(2, '0'),
          seconds: now.getSeconds().toString().padStart(2, '0'),
          period: now.getHours() >= 12 ? 'PM' : 'AM',
          date: now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        })
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div 
      className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-md relative"
      style={{ minHeight: '180px', minWidth: '280px' }} // Fixed dimensions prevent CLS
    >
      {/* Timezone label */}
      <div className="text-lg sm:text-[22px] text-[#6b7c93] font-normal mb-3 sm:mb-4 tracking-wide">
        {getDisplayName(timezone)}
      </div>

      {/* Time display - with placeholder for SSR */}
      <div className="flex items-baseline mb-3 sm:mb-4" style={{ minHeight: '72px' }}>
        {mounted && currentTime ? (
          <>
            <span className="text-5xl sm:text-[72px] font-bold text-[#1a1a1a] leading-none tracking-tight">
              {currentTime.hours}:{currentTime.minutes}
            </span>
            <span className="text-2xl sm:text-[36px] font-medium text-[#1a1a1a] leading-none">
              :{currentTime.seconds}
            </span>
            <span className="text-xl sm:text-[28px] font-medium text-[#1a1a1a] leading-none ml-1.5">
              {currentTime.period}
            </span>
          </>
        ) : (
          // Placeholder to prevent layout shift
          <span className="text-5xl sm:text-[72px] font-bold text-gray-300 leading-none tracking-tight">
            --:--
          </span>
        )}
      </div>

      {/* Date */}
      <div 
        className="text-base sm:text-[20px] text-[#6b7c93] font-normal tracking-wide"
        style={{ minHeight: '24px' }}
      >
        {mounted && currentTime ? currentTime.date : '\u00A0'}
      </div>
    </div>
  )
}

export default memo(LiveTime)