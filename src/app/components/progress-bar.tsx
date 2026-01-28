

export default function ProgressBar({ complete, size }: { complete: number, size: string }) {
  const barSize: number = (size==='s') ? 10 : 20;
  const amount: number = (complete*100).toFixed(2);
  return (
    <div className={`w-${barSize} h-1 bg-[var(--color-mid-hover)] mx-auto mb-4 rounded overflow-hidden`}>
      <div className={`h-full bg-[var(--color-highlight)]`} style={{width:`${amount}%`}}></div>
    </div>
  )
}
