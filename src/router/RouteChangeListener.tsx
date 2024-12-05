import { useLocation } from 'react-router-dom'

export default function RouteChangeListener() {
  const location = useLocation()
  console.log('🚀 ~ RouteChangeListener:', location)

  return null
}
