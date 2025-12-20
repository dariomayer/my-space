// src/modules/profile/components/cv/cv-document.tsx
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Usa font standard ATS-friendly - Helvetica è già disponibile in React-PDF

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 50,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.3,
  },
  header: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 10,
    marginBottom: 2,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 3,
  },
  job: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  company: {
    fontStyle: 'italic',
    fontSize: 10,
  },
  period: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'right',
  },
  achievement: {
    fontSize: 10,
    marginBottom: 2,
    paddingLeft: 15,
  },
  skillsSection: {
    marginBottom: 8,
  },
  skillsTitle: {
    fontWeight: 'bold',
    fontSize: 11,
    marginBottom: 5,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    fontSize: 9,
    marginRight: 10,
    marginBottom: 3,
  },
});

type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
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
  };
  language: string;
};

export function CvDocument({ data, language }: CvDocumentProps) {
  const isItalian = language === 'it';
  
  const sectionTitles = {
    profile: isItalian ? 'PROFILO PROFESSIONALE' : 'PROFESSIONAL PROFILE',
    experience: isItalian ? 'ESPERIENZA PROFESSIONALE' : 'PROFESSIONAL EXPERIENCE',
    education: isItalian ? 'FORMAZIONE' : 'EDUCATION',
    skills: isItalian ? 'COMPETENZE' : 'SKILLS',
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Intestazione ATS-friendly */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name.toUpperCase()}</Text>
          <Text style={styles.title}>{data.title}</Text>
          
          <View style={styles.contactInfo}>
            <View>
              <Text style={styles.contactItem}>{data.email}</Text>
              {data.phone && <Text style={styles.contactItem}>{data.phone}</Text>}
              <Text style={styles.contactItem}>{data.location}</Text>
            </View>
            <View>
              <Text style={styles.contactItem}>LinkedIn: {data.linkedin}</Text>
              <Text style={styles.contactItem}>Web: {data.website}</Text>
            </View>
          </View>
        </View>

        {/* Profilo Professionale */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.profile}</Text>
          <Text style={{ fontSize: 10, lineHeight: 1.4 }}>{data.summary}</Text>
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
              {exp.achievements.map((achievement, achIndex) => (
                <Text key={achIndex} style={styles.achievement}>
                  • {achievement}
                </Text>
              ))}
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
              <View style={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <Text key={skillIndex} style={styles.skillItem}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
