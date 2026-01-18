// src/modules/profile/components/experience-item.tsx
import { parseMarkdownToReact } from '@/shared/lib/text-parser';

interface ExperienceItemProps {
  company: string
  role: string
  period: string
  achievements: string[] | string
}

export function ExperienceItem({ company, role, period, achievements }: ExperienceItemProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <div className="min-w-0 md:max-w-[70%]">
          <h3 className="text-2xl font-bold">{role}</h3>
          <p className="text-lg text-primary font-medium">{company}</p>
        </div>
        <span className="text-sm text-muted-foreground md:text-right md:whitespace-nowrap">{period}</span>
      </div>

      {Array.isArray(achievements) ? (
        <ul className="space-y-3 text-base leading-relaxed text-foreground">
          {achievements.map((achievement: string, index: number) => (
            <li key={index} className="relative pl-7">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.55em] inline-block size-1.5 rounded-full bg-muted-foreground"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-base leading-relaxed text-foreground">
          {parseMarkdownToReact(achievements)}
        </p>
      )}
    </div>
  )
}
