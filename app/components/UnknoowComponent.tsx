export default function UnknownComponent({
  component,
}: {
  component: { type: string }
}) {
  return <div>unknown component: {component.type} </div>
}
