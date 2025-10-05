// my-space/src/modules/profile/components/experience-item.tsx
interface ExperienceItemProps {
  company: string
  role: string
  period: string
  achievements: string[]
}

export function ExperienceItem({ company, role, period, achievements }: ExperienceItemProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <div>
          <h3 className="text-2xl font-bold">{company}</h3>
          <p className="text-lg text-primary font-medium">{role}</p>
        </div>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>

      <ul className="space-y-3 text-base leading-relaxed text-foreground">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-muted-foreground mt-1.5">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
