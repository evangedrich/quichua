

export default function ProgressDots({ on, of }: { on: number, of: number }) {
  const isFull = (i: number, tot: number): string => { return (i<tot) ? '[var(--color-highlight)]': '[var(--color-mid-hover)]'; };
  return (
    <div className={`h-1 mx-auto mb-4 flex justify-around`} style={{width:`${(of<=6) ? 10/4 : (5+of)/4}rem`}}>
      {Array.from({ length: of }, (_, i) => (
        <div className={`w-1 h-1 bg-${isFull(i,on)} rounded`} key={`dot${i}`}></div>
      ))}
    </div>
  )
}
