"use client"

import { useEffect, useRef, useState, memo } from "react"

// State coordinates
const stateCoordinates = {
  Alabama: [32.806671, -86.79113],
  Alaska: [61.370716, -152.404419],
  Arizona: [33.729759, -111.431221],
  Arkansas: [34.969704, -92.373123],
  California: [36.116203, -119.681564],
  Colorado: [39.059811, -105.311104],
  Connecticut: [41.597782, -72.755371],
  Delaware: [39.318523, -75.507141],
  "District of Columbia": [38.897438, -77.026817],
  Florida: [27.766279, -81.686783],
  Georgia: [33.040619, -83.643074],
  Hawaii: [21.094318, -157.498337],
  Idaho: [44.240459, -114.478828],
  Illinois: [40.349457, -88.986137],
  Indiana: [39.849426, -86.258278],
  Iowa: [42.011539, -93.210526],
  Kansas: [38.5266, -96.726486],
  Kentucky: [37.66814, -84.670067],
  Louisiana: [31.169546, -91.867805],
  Maine: [44.693947, -69.381927],
  Maryland: [39.063946, -76.802101],
  Massachusetts: [42.230171, -71.530106],
  Michigan: [43.326618, -84.536095],
  Minnesota: [45.694454, -93.900192],
  Mississippi: [32.741646, -89.678696],
  Missouri: [38.456085, -92.288368],
  Montana: [46.921925, -110.454353],
  Nebraska: [41.12537, -98.268082],
  Nevada: [38.313515, -117.055374],
  "New Hampshire": [43.452492, -71.563896],
  "New Jersey": [40.298904, -74.521011],
  "New Mexico": [34.840515, -106.248482],
  "New York": [42.165726, -74.948051],
  "North Carolina": [35.630066, -79.806419],
  "North Dakota": [47.528912, -99.784012],
  Ohio: [40.388783, -82.764915],
  Oklahoma: [35.565342, -96.928917],
  Oregon: [44.572021, -122.070938],
  Pennsylvania: [40.590752, -77.209755],
  "Rhode Island": [41.680893, -71.51178],
  "South Carolina": [33.856892, -80.945007],
  "South Dakota": [44.299782, -99.438828],
  Tennessee: [35.747845, -86.692345],
  Texas: [31.054487, -97.563461],
  Utah: [40.150032, -111.862434],
  Vermont: [44.045876, -72.710686],
  Virginia: [37.769337, -78.169968],
  Washington: [47.400902, -121.490494],
  "West Virginia": [38.491226, -80.954453],
  Wisconsin: [44.268543, -89.616508],
  Wyoming: [42.755966, -107.30249],
  "Puerto Rico": [18.220833, -66.590149],
}

// Area code coordinates
const areaCodeCoordinates = {
  201: [40.8568, -74.2263], 202: [38.9072, -77.0369], 203: [41.2033, -73.1947],
  205: [33.5207, -86.8025], 206: [47.6062, -122.3321], 207: [44.3106, -69.7795],
  208: [43.615, -116.2023], 209: [37.9577, -121.2908], 210: [29.4241, -98.4936],
  212: [40.7831, -73.9712], 213: [34.0195, -118.4912], 214: [32.7767, -96.797],
  215: [39.9526, -75.1652], 216: [41.4993, -81.6944], 217: [39.7817, -89.6501],
  218: [46.7867, -92.1005], 219: [41.5934, -87.3467], 224: [42.154, -87.8036],
  225: [30.4515, -91.1871], 228: [30.3674, -89.0928], 229: [31.5785, -84.1557],
  231: [43.2342, -86.2484], 234: [41.0814, -81.519], 239: [26.142, -81.7948],
  240: [39.0458, -77.1175], 248: [42.5803, -83.4657], 251: [30.6954, -88.0399],
  252: [35.5585, -77.0545], 253: [47.2529, -122.4443], 254: [31.5493, -97.1467],
  256: [34.7304, -86.5861], 260: [41.1306, -85.1289], 262: [43.0389, -88.2314],
  267: [40.0094, -75.1333], 269: [42.2917, -85.5872], 270: [37.8393, -87.5711],
  272: [41.409, -75.6624], 276: [36.9859, -82.0185], 281: [29.7604, -95.3698],
  301: [39.0458, -77.1175], 302: [39.1582, -75.5244], 303: [39.7392, -104.9903],
  304: [38.3498, -81.6326], 305: [25.7617, -80.1918], 307: [43.0759, -107.2903],
  308: [41.1289, -100.7654], 309: [40.6936, -89.589], 310: [33.9425, -118.4081],
  312: [41.8781, -87.6298], 313: [42.3314, -83.0458], 314: [38.627, -90.1994],
  315: [43.0481, -76.1474], 316: [37.6872, -97.3301], 317: [39.7684, -86.1581],
  318: [32.5252, -93.7502], 319: [41.6611, -91.5302], 320: [45.5579, -94.1632],
  321: [28.5383, -81.3792], 323: [34.0669, -118.3093], 325: [32.4487, -99.7331],
  330: [41.0814, -81.519], 331: [41.7606, -88.3201], 334: [32.3668, -86.3],
  336: [36.0726, -79.792], 337: [30.2241, -92.0198], 339: [42.3601, -71.0589],
  346: [29.7604, -95.3698], 347: [40.6782, -73.9442], 351: [42.4072, -71.3824],
  352: [29.6516, -82.3248], 360: [48.7519, -122.4787], 361: [27.8006, -97.3964],
  364: [37.8393, -87.5711], 385: [40.7608, -111.891], 386: [29.2108, -81.0228],
  401: [41.824, -71.4128], 402: [41.2565, -95.9345], 404: [33.749, -84.388],
  405: [35.4676, -97.5164], 406: [46.8797, -110.3626], 407: [28.5383, -81.3792],
  408: [37.3382, -121.8863], 409: [29.885, -93.94], 410: [39.2904, -76.6122],
  412: [40.4406, -79.9959], 413: [42.1015, -72.5898], 414: [43.0389, -87.9065],
  415: [37.7749, -122.4194], 417: [37.209, -93.2923], 419: [41.6528, -83.5379],
  423: [35.0456, -85.3097], 424: [33.9425, -118.4081], 425: [47.6062, -122.3321],
  430: [32.3513, -95.3011], 432: [31.9973, -102.0779], 434: [37.2707, -79.9414],
  435: [40.7608, -111.891], 440: [41.4993, -81.6944], 442: [33.1959, -117.3795],
  443: [39.2904, -76.6122], 458: [44.0521, -123.0868], 469: [32.7767, -96.797],
  470: [33.749, -84.388], 475: [41.3083, -72.9279], 478: [32.8407, -83.6324],
  479: [36.0729, -94.166], 480: [33.4152, -111.8315], 484: [40.0094, -75.4333],
  501: [34.7465, -92.2896], 502: [38.2527, -85.7585], 503: [45.5152, -122.6784],
  504: [29.9511, -90.0715], 505: [35.0844, -106.6504], 507: [44.0234, -92.4699],
  508: [42.0629, -70.8115], 509: [47.6588, -117.426], 510: [37.8044, -122.2712],
  512: [30.2672, -97.7431], 513: [39.1031, -84.512], 515: [41.5868, -93.625],
  516: [40.7282, -73.6134], 517: [42.7325, -84.5555], 518: [42.6526, -73.7562],
  520: [32.2226, -110.9747], 530: [40.5865, -122.3917], 531: [41.2565, -95.9345],
  534: [43.0389, -87.9065], 539: [36.154, -95.9928], 540: [37.271, -79.9414],
  541: [44.0521, -123.0868], 551: [40.7282, -74.0776], 559: [36.7378, -119.7871],
  561: [26.7056, -80.0364], 562: [33.7701, -118.1937], 563: [41.5236, -90.5776],
  567: [41.6528, -83.5379], 570: [41.409, -75.6624], 571: [38.8816, -77.091],
  573: [38.5767, -92.1735], 574: [41.6764, -86.252], 575: [32.3199, -106.7637],
  580: [34.6036, -98.3959], 585: [43.1566, -77.6088], 586: [42.5803, -82.9972],
  601: [32.2988, -90.1848], 602: [33.4484, -112.074], 603: [43.1939, -71.5724],
  605: [44.3683, -100.351], 606: [37.8393, -83.2632], 607: [42.0987, -75.918],
  608: [43.0731, -89.4012], 609: [40.2206, -74.7597], 610: [40.0094, -75.4333],
  612: [44.9778, -93.265], 614: [39.9612, -82.9988], 615: [36.1627, -86.7816],
  616: [42.9634, -85.6681], 617: [42.3601, -71.0589], 618: [38.627, -90.1994],
  619: [32.7157, -117.1611], 620: [37.6872, -97.3301], 623: [33.4942, -112.174],
  626: [34.1478, -118.1445], 628: [37.7749, -122.4194], 629: [36.1627, -86.7816],
  630: [41.7606, -88.3201], 631: [40.8176, -73.0454], 636: [38.627, -90.4427],
  641: [41.6611, -93.0499], 646: [40.7831, -73.9712], 650: [37.4419, -122.143],
  651: [44.9537, -93.09], 657: [33.8366, -117.9143], 660: [39.0997, -94.5786],
  661: [35.3733, -119.0187], 662: [34.2576, -88.7037], 667: [39.2904, -76.6122],
  669: [37.3382, -121.8863], 678: [33.749, -84.388], 681: [38.3498, -81.6326],
  682: [32.7555, -97.3308], 689: [28.5383, -81.3792], 701: [46.8772, -96.7898],
  702: [36.1699, -115.1398], 703: [38.8816, -77.091], 704: [35.2271, -80.8431],
  706: [33.4735, -82.0105], 707: [38.4404, -122.7141], 708: [41.8369, -87.8055],
  712: [42.4969, -96.4003], 713: [29.7604, -95.3698], 714: [33.8366, -117.9143],
  715: [44.5192, -89.5746], 716: [42.8864, -78.8784], 717: [40.2732, -76.8867],
  718: [40.6782, -73.9442], 719: [38.8339, -104.8214], 720: [39.7392, -104.9903],
  724: [40.4406, -79.9959], 725: [36.1699, -115.1398], 727: [27.7676, -82.6403],
  731: [35.6145, -88.8139], 732: [40.4774, -74.2591], 734: [42.2808, -83.743],
  737: [30.2672, -97.7431], 740: [39.9612, -82.9988], 743: [35.2271, -80.8431],
  747: [34.1808, -118.309], 754: [26.1224, -80.1373], 757: [36.8529, -75.978],
  760: [33.1959, -117.3795], 762: [33.4735, -82.0105], 763: [45.1608, -93.3534],
  765: [40.1934, -85.3864], 769: [32.2988, -90.1848], 770: [33.749, -84.388],
  772: [27.4467, -80.3256], 773: [41.8781, -87.6298], 774: [42.0629, -70.8115],
  775: [39.5296, -119.8138], 779: [42.2711, -89.094], 781: [42.3601, -71.0589],
  785: [39.0558, -95.689], 786: [25.7617, -80.1918], 801: [40.7608, -111.891],
  802: [44.2601, -72.5754], 803: [34.0007, -81.0348], 804: [37.5407, -77.436],
  805: [34.4208, -119.6982], 806: [33.5779, -101.8552], 808: [21.3069, -157.8583],
  810: [42.9711, -83.6875], 812: [38.0406, -87.5341], 813: [27.9506, -82.4572],
  814: [40.7934, -77.86], 815: [41.5195, -88.0801], 816: [39.0997, -94.5786],
  817: [32.7555, -97.3308], 818: [34.1808, -118.309], 828: [35.5951, -82.5515],
  830: [29.4241, -99.7866], 831: [36.6002, -121.8947], 832: [29.7604, -95.3698],
  843: [32.7765, -79.9311], 845: [41.5034, -74.0104], 847: [42.154, -87.8036],
  848: [40.4774, -74.2591], 850: [30.4383, -84.2807], 854: [32.7765, -79.9311],
  856: [39.9495, -75.1178], 857: [42.3601, -71.0589], 858: [32.8328, -117.2713],
  859: [38.0406, -84.5037], 860: [41.7658, -72.6734], 862: [40.7357, -74.1724],
  863: [27.9506, -81.9576], 864: [34.8526, -82.394], 865: [35.9606, -83.9207],
  870: [35.8423, -90.7043], 872: [41.8781, -87.6298], 878: [40.4406, -79.9959],
  901: [35.1495, -90.049], 903: [32.3513, -95.3011], 904: [30.3322, -81.6557],
  906: [46.4963, -87.6675], 907: [61.2181, -149.9003], 908: [40.634, -74.4057],
  909: [34.1083, -117.2898], 910: [34.2257, -77.9447], 912: [32.0809, -81.0912],
  913: [39.1155, -94.6268], 914: [41.0534, -73.7629], 915: [31.7619, -106.485],
  916: [38.5816, -121.4944], 917: [40.7831, -73.9712], 918: [36.154, -95.9928],
  919: [35.7796, -78.6382], 920: [44.5192, -88.0198], 925: [37.9161, -122.0573],
  928: [35.1983, -111.6513], 929: [40.6782, -73.9442], 930: [39.7684, -86.1581],
  931: [36.1667, -86.7833], 936: [30.7235, -95.5508], 937: [39.7589, -84.1916],
  938: [34.7304, -86.5861], 940: [33.9137, -97.1503], 941: [27.3364, -82.5307],
  947: [42.5803, -83.4657], 949: [33.6846, -117.8265], 951: [33.9533, -117.3962],
  952: [44.8547, -93.4708], 954: [26.1224, -80.1373], 956: [26.2034, -98.23],
  959: [41.7658, -72.6734], 970: [40.5853, -105.0844], 971: [45.5152, -122.6784],
  972: [32.7767, -96.797], 973: [40.7357, -74.1724], 978: [42.5195, -71.1068],
  979: [30.628, -96.3344], 980: [35.2271, -80.8431], 984: [35.7796, -78.6382],
  985: [29.9511, -90.2579], 989: [43.4195, -83.9508],
}

function AreaCodeMap({ codes, state, zoom = 6, areaCode }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!mapRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px', threshold: 0.01 }
    )

    observer.observe(mapRef.current)
    return () => observer.disconnect()
  }, [])

  // Initialize map only when visible
  useEffect(() => {
    if (typeof window === "undefined" || !isVisible) return

    const initMap = async () => {
      try {
        const L = (await import("leaflet")).default
        
        // Load CSS if not already loaded
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          link.crossOrigin = 'anonymous'
          document.head.appendChild(link)
          await new Promise(resolve => setTimeout(resolve, 100))
        }

        let center = [39.8283, -98.5795]
        let mapZoom = 4

        if (areaCode && areaCodeCoordinates[areaCode]) {
          center = areaCodeCoordinates[areaCode]
          mapZoom = zoom
        } else if (state && stateCoordinates[state]) {
          center = stateCoordinates[state]
          mapZoom = zoom
        } else if (codes && codes.length > 0) {
          const validCoords = codes.map((code) => areaCodeCoordinates[code.code]).filter(Boolean)
          if (validCoords.length > 0) {
            const avgLat = validCoords.reduce((sum, c) => sum + c[0], 0) / validCoords.length
            const avgLng = validCoords.reduce((sum, c) => sum + c[1], 0) / validCoords.length
            center = [avgLat, avgLng]
            mapZoom = zoom
          }
        }

        // Cleanup existing map
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
        }
        markersRef.current = []

        if (mapRef.current) {
          const map = L.map(mapRef.current, {
            scrollWheelZoom: false,
            preferCanvas: true, // Better performance
          }).setView(center, mapZoom)
          
          mapInstanceRef.current = map

          // Use lightweight CARTO tiles
          L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
            maxZoom: 19,
            crossOrigin: 'anonymous',
          }).addTo(map)

          // Create marker icon
          const createIcon = (code) => L.divIcon({
            className: 'area-marker',
            html: `<div style="
              background: linear-gradient(135deg, #3B82F6, #1E40AF);
              width: 42px; height: 42px; border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 4px 12px rgba(59,130,246,0.4);
              display: flex; align-items: center; justify-content: center;
              color: white; font-weight: 700; font-size: 11px;
              font-family: system-ui, sans-serif;
            ">${code}</div>`,
            iconSize: [42, 42],
            iconAnchor: [21, 21],
            popupAnchor: [0, -21]
          })

          // Add markers
          if (codes && codes.length > 0) {
            codes.forEach((code) => {
              const coords = areaCodeCoordinates[code.code]
              if (coords) {
                const marker = L.marker(coords, { icon: createIcon(code.code) }).addTo(map)
                marker.bindPopup(`
                  <div style="text-align:center;min-width:160px;padding:8px;font-family:system-ui,sans-serif;">
                    <div style="font-size:28px;font-weight:800;color:#2563EB;margin-bottom:6px;">${code.code}</div>
                    <div style="font-size:15px;font-weight:600;color:#1f2937;margin-bottom:4px;">${code.state}</div>
                    <div style="font-size:12px;color:#6b7280;margin-bottom:8px;">${code.cities?.slice(0,2).join(", ")||""}</div>
                    <a href="/${code.code}/area-code" style="
                      display:block;padding:8px 16px;background:linear-gradient(135deg,#3B82F6,#1E40AF);
                      color:white;text-decoration:none;border-radius:8px;font-size:12px;font-weight:600;
                    ">View Details →</a>
                  </div>
                `, { maxWidth: 250 })
                markersRef.current.push(marker)
              }
            })
          }

          setTimeout(() => {
            map.invalidateSize()
            setIsLoading(false)
          }, 100)
        }
      } catch (err) {
        console.error("Map error:", err)
        setHasError(true)
        setIsLoading(false)
      }
    }

    initMap()
    
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [codes, state, zoom, areaCode, isVisible])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative">
      {/* Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-50 rounded-2xl flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-gray-500 text-sm">Loading map...</p>
          </div>
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center z-10">
          <div className="text-center p-6">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-gray-500 text-sm">Map unavailable</p>
          </div>
        </div>
      )}
      
      {/* Map Container - Fixed height prevents CLS */}
      <div 
        ref={mapRef} 
        style={{ 
          width: "100%", 
          height: "400px", 
          minHeight: "400px",
          borderRadius: "16px", 
          border: "1px solid #e5e7eb",
          backgroundColor: '#f9fafb'
        }} 
      />
    </div>
  )
}

export default memo(AreaCodeMap)
export { stateCoordinates, areaCodeCoordinates }