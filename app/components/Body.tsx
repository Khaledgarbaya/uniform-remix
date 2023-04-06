import { registerUniformComponent } from '@uniformdev/canvas-react'
import Navigation from './Navigation'

export default function Body({
  fields,
  content,
}: {
  fields: { title: string; description: string }
  content: {
    id: string
    url: string
    fields: { title: string; description: string }
  }[]
}) {
  const title = fields.title
  const description = fields.description
  return (
    <main className='main'>
      <Navigation content={content} />
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
    </main>
  )
}
registerUniformComponent({
  type: 'body',
  component: Body,
})
