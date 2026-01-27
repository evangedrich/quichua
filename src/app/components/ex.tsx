import Text from './text-prep';

export default function Vocab({ children }: { children: React.ReactNode }) {
  const items = Array.isArray(children.items[0]) ? children.items.flat() : children.items;
  return (
    <>{items.map((item,i) => (
      <Text type="p" key={`p${i}`}>{item}</Text>
    ))}</>
  )
}
