// my-space/src/modules/profile/components/skill-category.tsx
interface SkillCategoryProps {
  title: string
  skills: string[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="space-y-2 text-base text-foreground">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
