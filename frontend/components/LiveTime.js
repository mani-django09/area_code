// ==========================================
// Live Time Component for Area Code Pages
// ==========================================

import { useState, useEffect } from 'react';

// Time Zone Mapping
const TIME_ZONES = {
  'Eastern Time (ET)': 'America/New_York',
  'Central Time (CT)': 'America/Chicago',
  'Mountain Time (MT)': 'America/Denver',
  'Pacific Time (PT)': 'America/Los_Angeles',
  'Alaska Time (AKT)': 'America/Anchorage',
  'Hawaii Time (HT)': 'Pacific/Honolulu',
  'Hawaii-Aleutian Time': 'Pacific/Honolulu'
};

export default function LiveTime({ timezone }) {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const timeZone = TIME_ZONES[timezone] || 'America/New_York';
      
      const now = new Date();
      const options = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      
      const timeString = now.toLocaleTimeString('en-US', options);
      
      const dateOptions = {
        timeZone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      
      const dateString = now.toLocaleDateString('en-US', dateOptions);
      
      setCurrentTime({ time: timeString, date: dateString });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  if (!currentTime) return null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
      <div className="text-sm text-gray-600 mb-2">{timezone}</div>
      <div className="text-4xl font-bold text-gray-900 mb-1 font-mono">
        {currentTime.time}
      </div>
      <div className="text-sm text-gray-600">
        {currentTime.date}
      </div>
    </div>
  );
}

// ==========================================
// ADD TO YOUR AREA CODE PAGE
// Insert this component in the stats section
// ==========================================

/*
// In your pages/area-code/[code].js file:

import LiveTime from '../../components/LiveTime';

// Then add it to your stats grid:

<div className="grid md:grid-cols-3 gap-4 mb-8">
  
  // First two cards stay the same...
  
  // Replace the third card with this:
  <div className="md:col-span-1">
    <LiveTime timezone={areaCode.timezone} />
  </div>
</div>
*/

// ==========================================
// ALTERNATIVE: Inline Version (No separate component)
// ==========================================

export function AreaCodePageWithTime({ areaCode }) {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const TIME_ZONES = {
      'Eastern Time (ET)': 'America/New_York',
      'Central Time (CT)': 'America/Chicago',
      'Mountain Time (MT)': 'America/Denver',
      'Pacific Time (PT)': 'America/Los_Angeles',
      'Alaska Time (AKT)': 'America/Anchorage',
      'Hawaii Time (HT)': 'Pacific/Honolulu'
    };

    const updateTime = () => {
      const timeZone = TIME_ZONES[areaCode.timezone] || 'America/New_York';
      const now = new Date();
      
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      
      const dateString = now.toLocaleDateString('en-US', {
        timeZone,
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
      
      setCurrentTime({ time: timeString, date: dateString });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [areaCode.timezone]);

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      
      {/* Location Card */}
      <div className="bg-white rounded-lg p-5 border border-gray-200">
        <div className="text-sm text-gray-500 mb-1">Location</div>
        <div className="text-lg font-semibold text-gray-900">{areaCode.state}</div>
        <div className="text-sm text-gray-600 mt-1">{areaCode.cities[0]}</div>
      </div>
      
      {/* Live Time Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
        <div className="text-sm text-blue-600 font-medium mb-2">
          {areaCode.timezone}
        </div>
        {currentTime && (
          <>
            <div className="text-3xl font-bold text-gray-900 mb-1 font-mono tracking-tight">
              {currentTime.time}
            </div>
            <div className="text-xs text-gray-600">
              {currentTime.date}
            </div>
          </>
        )}
      </div>
      
      {/* Coverage Card */}
      <div className="bg-white rounded-lg p-5 border border-gray-200">
        <div className="text-sm text-gray-500 mb-1">Coverage</div>
        <div className="text-lg font-semibold text-gray-900">{areaCode.cities.length} Cities</div>
        <div className="text-sm text-gray-600 mt-1">
          Est. {areaCode.year}
        </div>
      </div>
    </div>
  );
}