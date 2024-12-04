import { Link, useMatches } from 'react-router-dom'

export default function BreadCrumbs() {
  const matches = useMatches()
  // console.log('🚀 ~ BreadCrumbs ~ matches:', matches)
  const crumbMatches = matches.filter(match => !!match.handle?.crumb)

  return (
    <div>
      <span>
        面包屑导航：
        {crumbMatches.map((match, idx) => {
          const title = match.handle.crumb()
          return (
            <span key={idx.toString()}>
              {!!idx && <span> / </span>}
              {idx !== crumbMatches.length - 1 ? (
                <Link to={match.pathname}>{title}</Link>
              ) : (
                <span>{title}</span>
              )}
            </span>
          )
        })}
      </span>
    </div>
  )
}
