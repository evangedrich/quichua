import Text from './text-prep';
import { textParser } from './text-parser';
import styles from '@/app/ui/lessons.module.css';

export default function Vocab({ children }: { children: React.ReactNode }) {
  const items = children.items;
  return (
    <table className={styles.columns}>
      <tbody>
        {items.map((item,i) => (
          <tr key={`tr${i}`}>
            <td><b>{textParser(item.qu)}</b>: </td>
            <td><Text>{{en:item.en,es:item.es}}</Text></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
