'use client';

import useMotion from '@/app/hooks/useMotion';
import { tocapuLibrary, tocapuSearch } from '@/app/ui/tocapu';
import tocapuStyles from '@/app/ui/tocapu.module.css';

export default function PhaseIcon({ id, margin }: { id: string, margin: boolean }) {
  const { motion } = useMotion();
  return (
    <div className={`${motion?tocapuStyles.svgMove:''} w-10 h-10 bg-blue-500 mx-auto ${margin?'mb-4':'mb-1'}`}>{tocapuSearch(id)}</div>
  )
}
