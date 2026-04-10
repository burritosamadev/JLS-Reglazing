'use client'

import dynamic from 'next/dynamic'

const ServiceAreaMap = dynamic(() => import('./ServiceAreaMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] md:h-[500px] rounded-xl bg-surface-alt animate-pulse flex items-center justify-center">
      <p className="text-form-muted font-jost">Loading map...</p>
    </div>
  ),
})

export default function ServiceAreaMapWrapper() {
  return <ServiceAreaMap />
}
