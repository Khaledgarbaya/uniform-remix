import { CanvasClient } from '@uniformdev/canvas'
const client = new CanvasClient({
  apiKey: process.env.UNIFORM_API_KEY,
  projectId: process.env.UNIFORM_PROJECT_ID,
})
export async function getComposition(slug: string) {
  const { composition } = await client.getCompositionBySlug({
    slug,
  })
  return composition
}
