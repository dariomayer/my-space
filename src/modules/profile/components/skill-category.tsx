// src/modules/profile/components/skill-category.tsx
interface SkillCategoryProps {
  title: string
  skills: string[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="group relative rounded-xl border border-border/50 bg-card/30 p-8 transition-all duration-300 hover:border-border hover:bg-card/50 hover:shadow-lg">
      {/* Gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0" />
      
      {/* Title */}
      <h3 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      
      {/* Skills as badges */}
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
