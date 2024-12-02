import { Link } from 'react-router-dom'

export default function PageOneEdit() {
  return (
    <>
      <h3>Page One Edit</h3>
      {/* relative='path' means based on the current path not route hierarchy */}
      <Link to='..' relative='path'>
        返回上一页
      </Link>
    </>
  )
}
