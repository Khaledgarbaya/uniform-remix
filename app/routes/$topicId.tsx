import { json, LoaderArgs, V2_MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Layout from '~/components/Layout'
import content from '../content/content.json'

export const meta: V2_MetaFunction = ({ data }) => {
  if (!data) return [{ title: 'Topic Not Found' }]

  return [{ title: data.fields.title }]
}

export function loader({ params }: LoaderArgs) {
  const { topicId } = params
  const topic = content.find((e) => e.id == topicId)
  if (!topic) {
    throw new Response('Not Found', {
      status: 404,
    })
  }
  return json({ fields: topic.fields })
}

export default function Topic() {
  const { fields } = useLoaderData<typeof loader>()
  return <Layout content={content} fields={fields} />
}
