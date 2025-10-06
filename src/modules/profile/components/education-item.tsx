// src/modules/profile/components/education-item.tsx
interface EducationItemProps {
  degree: string
  institution: string
  period: string
  description: string
}

export function EducationItem({ degree, institution, period, description }: EducationItemProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <div>
          <h3 className="text-2xl font-bold">{degree}</h3>
          <p className="text-lg text-muted-foreground font-medium">{institution}</p>
        </div>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>

      <p className="text-base leading-relaxed text-foreground">{description}</p>
    </div>
  )
}
