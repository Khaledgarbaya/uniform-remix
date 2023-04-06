import Body from '~/components/Body'
import UnknownComponent from '~/components/UnknoowComponent'

export default function resolveRenderer({ type }: { type: string }) {
  if (type == 'defaultBody') {
    return Body
  }
  return UnknownComponent
}
