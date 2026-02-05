import { phaseType } from '@/app/lib/lessons';
import Text from './text-prep';
import { textParser } from './text-parser';
import styles from '@/app/ui/lessons.module.css';

export default function Vocab({ obj }: { obj: phaseType }) {
  const items = Array.isArray(obj.items[0]) ? obj.items.flat() : obj.items;
  return (
    <table className={styles.columns}>
      <tbody>
        {items.map((item,i) => (
          <tr key={`tr${i}`}>
            <td><b>{textParser((typeof item === 'object' && 'qu' in item)?item.qu:'')}</b> </td>
            <td><Text>{(typeof item === 'object' && 'en' in item)?{en:item.en,es:item.es}:{en:'',es:''}}</Text></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
