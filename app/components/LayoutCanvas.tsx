import { V2_MetaFunction } from '@remix-run/node'
import { UniformSlot } from '@uniformdev/canvas-react'

import Footer from './Footer'

export const meta: V2_MetaFunction = ({ data: { fields } }) => {
  return [{ title: fields.title }]
}

export default function LayoutCanvas() {
  return (
    <div className='container'>
      <UniformSlot name='body' />
      <Footer />
    </div>
  )
}
