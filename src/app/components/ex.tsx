import Text from './text-prep';

export default function Ex({ obj }: any) {
  const items = Array.isArray(obj.items[0]) ? obj.items.flat() : obj.items;
  return (
    <>{items.map((item: any, i: number) => (
      <Text type="p" key={`p${i}`}>{item}</Text>
    ))}</>
  )
}
