

export default function ProgressDots({ on, of, size }: { on: number, of: number, size: string }) {
  const barSize: number = (of<=6) ? 10 : (5+of);
  const isFull = (i: number, tot: number): string => { return (i<tot) ? '[var(--color-highlight)]': '[var(--color-mid-hover)]'; };
  return (
    <div className={`w-${barSize} h-1 mx-auto mb-4 flex justify-around`}>
      {Array.from({ length: of }, (_, i) => (
        <div className={`w-1 h-1 bg-${isFull(i,on)} rounded`} key={`dot${i}`}></div>
      ))}
    </div>
  )
}
