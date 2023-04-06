import { V2_MetaFunction } from '@remix-run/node'
import Body from './Body'
import Footer from './Footer'

export const meta: V2_MetaFunction = ({ data: { fields } }) => {
  return [{ title: fields.title }]
}
export default function Layout({
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
  return (
    <div className='container'>
      <Body fields={fields} content={content} />
      <Footer />
    </div>
  )
}
