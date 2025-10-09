// src/modules/profile/components/certification-item.tsx

interface CertificationItemProps {
  title: string
  institution: string
  date: string
  description: string
}

export function CertificationItem({ title, institution, date, description }: CertificationItemProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg text-primary font-medium">{institution}</p>
        </div>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <p className="text-base leading-relaxed text-foreground">{description}</p>
    </div>
  )
}
