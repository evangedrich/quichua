'use client';

import useMotion from '@/app/hooks/useMotion';
import { tocapuLibrary, tocapuSearch } from '@/app/ui/tocapu';
import tocapuStyles from '@/app/ui/tocapu.module.css';

export default function PhaseIcon({ id }) {
  const { motion } = useMotion();
  return (
    <div className={`${motion?tocapuStyles.svgMove:''} w-10 h-10 bg-blue-500 mx-auto mb-4`}>{tocapuSearch(id)}</div>
  )
}
