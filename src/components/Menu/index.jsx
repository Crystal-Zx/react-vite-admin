import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul className='sidebar'>
      <li className='sidebar-li'>
        <Link to={'/page1'}>page1</Link>
      </li>
      <li className='sidebar-li'>
        <Link to={'/page2'}>page2</Link>
      </li>
      <li className='sidebar-li'>
        <Link to={'/page3'}>page3</Link>
      </li>
    </ul>
  )
}
