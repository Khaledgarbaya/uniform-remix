import { Link } from '@remix-run/react'

export default function Navigation({
  content,
}: {
  content: {
    id: string
    url: string
    fields: { title: string; description: string }
  }[]
}) {
  if (!content) return null
  const links = content.filter((c) => c.url)
  return (
    <div>
      {links.map((e, i: number) => {
        const separator = i > 0 ? ' :: ' : null
        return (
          <span key={e.id}>
            {separator}
            <Link to={e.url}>{e.fields.title}</Link>
          </span>
        )
      })}
    </div>
  )
}
