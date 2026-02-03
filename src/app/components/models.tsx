import Text from './text-prep';
import { textParser } from './text-parser';
import styles from '@/app/ui/lessons.module.css';

export default function Models({ obj, offset }) {
  const items = Array.isArray(obj.items[0]) ? obj.items.flat() : obj.items;
  offset ??= 0;
  return (
    <table className={styles.columns}>
      <tbody>
        {items.map((item,i) => (
          <tr key={`tr${i}`}>
            <td>{i+1+offset}. <b>{textParser(item.qu)}</b></td>
            <td><Text>{{en:item.en,es:item.es}}</Text></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
