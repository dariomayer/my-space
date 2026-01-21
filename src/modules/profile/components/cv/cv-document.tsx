// src/modules/profile/components/cv/cv-document.tsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { parseMarkdownToPdf } from "@/shared/lib/text-parser";

// Usa font standard ATS-friendly - Helvetica è già disponibile in React-PDF

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    backgroundColor: "#E8F4FD",
    padding: 16,
    borderRadius: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0066CC",
    marginBottom: 6,
    textAlign: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 4,
    color: "#333333",
    textAlign: "center",
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    flexWrap: "wrap",
    //backgroundColor: '#F5F7FA',
    padding: 6,
    borderRadius: 4,
  },
  contactItem: {
    fontSize: 10.5,
    color: "#2D3748",
    paddingHorizontal: 5,
    fontWeight: "500",
  },
  contactLabel: {
    fontWeight: "bold",
    color: "#0066CC",
  },
  contactSeparator: {
    fontSize: 10,
    color: "#333333",
    paddingHorizontal: 2,
    alignSelf: "center",
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.4,
    marginTop: 4,
    marginHorizontal: 12,
    textAlign: "justify",
    color: "#333333",
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#FFFFFF",
    backgroundColor: "#0066CC",
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: "100%",
    alignSelf: "center",
    borderRadius: 4,
  },
  job: {
    marginBottom: 12,
    paddingLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#E8F4FD",
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  jobTitle: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#333333",
  },
  company: {
    fontStyle: "italic",
    fontSize: 11,
    color: "#0066CC",

    //color: '#333333',
    //fontWeight: '600',
    //marginBottom: 2,
  },
  period: {
    fontSize: 10,
    color: "#0066CC",
    fontWeight: "bold",
    textAlign: "right",
  },
  achievement: {
    fontSize: 10,
    marginBottom: 1,
    paddingLeft: 12,
    color: "#555555",
  },
  skillsSection: {
    marginBottom: 6,
    backgroundColor: "#F8F9FA",
    borderWidth: 1,
    borderColor: "#E1E4E8",
    borderRadius: 4,
    padding: 6,
  },
  skillsTitle: {
    fontWeight: "bold",
    fontSize: 12,
    //marginBottom: 4,
    color: "#0066CC",
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    fontSize: 10,
    lineHeight: 1.4,
    //marginBottom: 3,
    color: "#555555",
  },
});

type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[] | string;
};

type Education = {
  degree: string;
  institution: string;
  period: string;
};

type SkillCategory = {
  title: string;
  skills: string[];
};

type Certification = {
  title: string;
  institution: string;
  date: string;
};

type CvDocumentProps = {
  data: {
    name: string;
    title: string;
    email: string;
    phone?: string;
    location: string;
    linkedin: string;
    website: string;
    summary: string;
    experiences: Experience[];
    education: Education[];
    skills: SkillCategory[];
    certifications: Certification[];
  };
  language: string;
};

// Componente helper per renderizzare testo markdown in React-PDF
function MarkdownText({ text, style }: { text: string; style?: any }) {
  const parts = parseMarkdownToPdf(text);

  return (
    <Text style={style}>
      {parts.map((part, index) => (
        <Text key={index} style={part.bold ? { fontWeight: "bold" } : undefined}>
          {part.text}
        </Text>
      ))}
    </Text>
  );
}

export function CvDocument({ data, language }: CvDocumentProps) {
  const isItalian = language === "it";

  const sectionTitles = {
    profile: isItalian ? "PROFILO PROFESSIONALE" : "PROFESSIONAL PROFILE",
    experience: isItalian
      ? "ESPERIENZA PROFESSIONALE"
      : "PROFESSIONAL EXPERIENCE",
    education: isItalian ? "FORMAZIONE" : "EDUCATION",
    skills: isItalian ? "COMPETENZE" : "SKILLS",
    certifications: isItalian ? "CERTIFICAZIONI" : "CERTIFICATIONS",
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Intestazione ATS-friendly con stile moderno */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name.toUpperCase()}</Text>
          <Text style={styles.title}>{data.title}</Text>

          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>Email:</Text> {data.email}
            </Text>
            <Text style={styles.contactSeparator}>|</Text>
            {data.phone && (
              <>
                <Text style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Phone:</Text> {data.phone}
                </Text>
                <Text style={styles.contactSeparator}>|</Text>
              </>
            )}
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>Location:</Text> {data.location}
            </Text>
            <Text style={styles.contactSeparator}>|</Text>
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>LinkedIn:</Text> {data.linkedin}
            </Text>
            <Text style={styles.contactSeparator}>|</Text>
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>Web:</Text> {data.website}
            </Text>
          </View>

          {/* Profilo Professionale integrato nell'header */}
          <View>
            <MarkdownText text={data.summary} style={styles.summary} />
          </View>
        </View>

        {/* Esperienza Professionale */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.experience}</Text>
          {data.experiences.map((exp, index) => (
            <View key={index} style={styles.job}>
              <View style={styles.jobHeader}>
                <View>
                  <Text style={styles.jobTitle}>{exp.role}</Text>
                  <Text style={styles.company}>{exp.company}</Text>
                </View>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              {Array.isArray(exp.achievements) ? (
                exp.achievements.map((achievement: string, achIndex: number) => (
                  <Text key={achIndex} style={styles.achievement}>
                    - {achievement}
                  </Text>
                ))
              ) : (
                <MarkdownText text={exp.achievements} style={styles.achievement} />
              )}
            </View>
          ))}
        </View>

        {/* Certificazioni */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.certifications}</Text>
          {data.certifications.map((cert, index) => (
            <View key={index} style={styles.job}>
              <View style={styles.jobHeader}>
                <View>
                  <Text style={styles.jobTitle}>{cert.title}</Text>
                  <Text style={styles.company}>{cert.institution}</Text>
                </View>
                <Text style={styles.period}>{cert.date}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Formazione */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.education}</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.job}>
              <View style={styles.jobHeader}>
                <View>
                  <Text style={styles.jobTitle}>{edu.degree}</Text>
                  <Text style={styles.company}>{edu.institution}</Text>
                </View>
                <Text style={styles.period}>{edu.period}</Text>
              </View>
            </View>
          ))}
        </View>

                {/* Competenze */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.skills}</Text>
          {data.skills.map((category, index) => (
            <View key={index} style={styles.skillsSection}>
              <Text style={styles.skillsTitle}>{category.title}:</Text>
              <Text style={styles.skillItem}>{category.skills.join(", ")}</Text>
            </View>
          ))}
        </View>

      </Page>
    </Document>
  );
}
