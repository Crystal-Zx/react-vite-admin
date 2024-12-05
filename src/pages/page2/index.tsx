import { Link, Outlet } from 'react-router-dom'

export default function PageTwo() {
  return (
    <>
      <h3>Page Two</h3>
      <div style={{ marginTop: '20px', border: '1px dashed red' }}>
        <p>路由测试：</p>
        <Link to='detail'>Show Detail</Link>
        <Outlet />
      </div>
    </>
  )
}
