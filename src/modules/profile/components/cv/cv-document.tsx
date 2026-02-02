// src/modules/profile/components/cv/cv-document.tsx
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { parseMarkdownToPdf } from "@/shared/lib/text-parser";

// Usa font standard ATS-friendly - Helvetica è già disponibile in React-PDF

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 26,
    fontFamily: "Helvetica",
    fontSize: 12,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: "#0066CC",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 14,
    backgroundColor: "#FAFBFC",
    marginHorizontal: 0,
  },
  atsKeywords: {
    fontSize: 1,
    color: "#FFFFFF",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1A1A2E",
    marginBottom: 16,
    textAlign: "left",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0066CC",
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    //marginBottom: 10,
    //marginHorizontal: 4,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  contactItemFirst: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  contactIcon: {
    fontSize: 10,
    color: "#0066CC",
    fontWeight: "bold",
    marginRight: 3,
  },
  contactValue: {
    fontSize: 10,
    color: "#2D3748",
  },
  contactLink: {
    fontSize: 10,
    color: "#0066CC",
    textDecoration: "underline",
  },
  dividerLine: {
    height: 0.6,
    backgroundColor: "#E1E4E8",
    marginVertical: 10,
  },
  summary: {
    fontSize: 10.5,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#4A4A4A",
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
    marginBottom: 2,
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
    fontSize: 10.5,
    //marginBottom: 4,
    color: "#0066CC",
  },
  skillItem: {
    fontSize: 10.5,
    //lineHeight: 1.4,
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
        <Text
          key={index}
          style={part.bold ? { fontWeight: "bold" } : undefined}
        >
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
          {/* Nome */}
          <Text style={styles.name}>{data.name.toUpperCase()}</Text>
          
          {/* Titolo */}
          <Text style={styles.title}>{data.title}</Text>

          {/* Contatti in riga */}
          <View style={styles.contactRow}>
            <View style={styles.contactItemFirst}>
              <Text style={styles.contactIcon}>Email:</Text>
              <Link src={`mailto:${data.email}`} style={styles.contactLink}>
                {data.email}
              </Link>
            </View>
            {data.phone && (
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>Phone:</Text>
                <Text style={styles.contactValue}>{data.phone}</Text>
              </View>
            )}
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>Location:</Text>
              <Text style={styles.contactValue}>{data.location}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>LinkedIn:</Text>
              <Link src={data.linkedin} style={styles.contactLink}>
                {data.linkedin.replace(/^https?:\/\//, '')}
              </Link>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>Web:</Text>
              <Link src={data.website} style={styles.contactLink}>
                {data.website.replace(/^https?:\/\//, '')}
              </Link>
            </View>
          </View>

          {/* Linea separatrice */}
          <View style={styles.dividerLine} />

          {/* Profilo Professionale */}
          <MarkdownText text={data.summary} style={styles.summary} />

          {/* Keywords ATS nascoste */}
          {/* <Text style={styles.atsKeywords}>
            Keyword: Building Automation, BMS, KNX, BACnet, Modbus, HVAC, IoT,
            Smart Buildings, Cloud, Node.js, React
          </Text> */}
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
                exp.achievements.map(
                  (achievement: string, achIndex: number) => (
                    <Text key={achIndex} style={styles.achievement}>
                      - {achievement}
                    </Text>
                  ),
                )
              ) : (
                <MarkdownText
                  text={exp.achievements}
                  style={styles.achievement}
                />
              )}
            </View>
          ))}
        </View>

        {/* Certificazioni */}
        <View style={styles.section} 
        //break
        >
          <Text style={styles.sectionTitle}>
            {sectionTitles.certifications}
          </Text>
          {data.certifications.map((cert, index) => (
            <View key={index} style={styles.job} wrap={false}>
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
              <Text style={styles.skillItem}>
                <Text style={styles.skillsTitle}>{category.title}:</Text> {category.skills.join(", ")}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
