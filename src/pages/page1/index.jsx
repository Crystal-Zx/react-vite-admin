import strings from '@/constants/strings'

export default function PageOne() {
  // console.log('page one render')
  return (
    <div>
      <h3>Page One</h3>
      <div style={{ border: '1px dashed red' }}>
        <p>环境变量测试：{import.meta.env.VITE_API_BASE_URL}</p>
        <p>路径别名测试：{strings.storageKeyTest}</p>
      </div>
    </div>
  )
}
