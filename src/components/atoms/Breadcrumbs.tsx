import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <ol className="flex items-center gap-1.5 text-sm font-jost text-gray-500 flex-wrap">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 && <span className="text-gray-400">/</span>}
            {index === items.length - 1 ? (
              <span className="text-charcoal font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-cta transition-colors">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
