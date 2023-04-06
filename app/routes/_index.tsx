import { json, V2_MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { UniformComposition } from '@uniformdev/canvas-react'
import LayoutCanvas from '~/components/LayoutCanvas'
import resolveRenderer from '~/lib/resolveRenderer'
import { getComposition } from '~/utils/composition.server'
import content from '../content/content.json'
import doEnhance from '../lib/enhancer.js'

export const meta: V2_MetaFunction = ({ data }) => {
  if (!data) return [{ title: 'Not Found' }]
  return [{ title: data.fields.title }]
}

export async function loader() {
  const slug = '/'
  const topic = content.find((e) => e.url == slug)
  if (!topic) {
    throw new Response('Not Found', {
      status: 404,
    })
  }
  const composition = await getComposition(slug)

  await doEnhance(composition)

  //
  //Return props for the home page that
  //include the composition and content
  //required by the page components.
  return json({ fields: topic.fields, composition })
}

export default function Index() {
  const { fields, composition } = useLoaderData<typeof loader>()
  return (
    <UniformComposition data={composition} resolveRenderer={resolveRenderer}>
      <LayoutCanvas composition={composition} fields={fields} />
    </UniformComposition>
  )
}
