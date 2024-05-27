import {
  Education,
  Iso8601,
  LinkedInProfile,
  Profile,
  Project,
  Skill,
  Work
} from 'shared'

export default function buildLatex(profile: LinkedInProfile): string {
  const { basics, education, work, projects, skills } = profile

  const formatProfiles = (profiles: Profile[] = []) =>
    profiles
      .map(profile => {
        return `\\href{${profile.url}}{\\underline{${profile.username}}}`
      })
      .join(' $|$ ')

  const formatDate = (startDate?: Iso8601, endDate?: Iso8601) => {
    if (startDate && endDate) {
      return `${new Date(startDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      })} -- ${new Date(endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
    }
    return startDate
      ? `${new Date(startDate).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric'
        })} -- Present`
      : ''
  }

  const formatEducation = (education: Education[] = []) =>
    education
      .map(edu => {
        return `
    \\resumeSubheading
      {${edu.institution}}{Bethlehem, PA}
      {${edu.studyType} in ${edu.area}}{${formatDate(edu.startDate, edu.endDate)}}
    `
      })
      .join('\n')

  const formatWork = (work: Work[] = []) =>
    work
      .map(job => {
        const highlights =
          job.highlights
            ?.map(highlight => `\\resumeItem{${highlight}}`)
            .join('\n') || ''
        return `
    \\resumeSubheading
      {${job.position}}{${formatDate(job.startDate, job.endDate)}}
      {${job.name}}{${job.location}}
      \\resumeItemListStart
        ${highlights}
      \\resumeItemListEnd
    `
      })
      .join('\n')

  const formatProjects = (projects: Project[] = []) =>
    projects
      .map(project => {
        const highlights =
          project.highlights
            ?.map(highlight => `\\resumeItem{${highlight}}`)
            .join('\n') || ''
        return `
    \\resumeProjectHeading
      {\\textbf{${project.name}} $|$ \\emph{${project.keywords?.join(', ')}}}{${formatDate(project.startDate, project.endDate)}}
      \\resumeItemListStart
        ${highlights}
      \\resumeItemListEnd
    `
      })
      .join('\n')

  const formatSkills = (skills: Skill[] = []) => {
    const skillCategories = skills
      .map(skill => `\\textbf{${skill.name}}{${skill.keywords?.join(', ')}}`)
      .join(' \\\\\n')
    return `
    \\begin{itemize}[leftmargin=0.15in, label={}]
      \\small{\\item{
        ${skillCategories}
      }}
    \\end{itemize}
    `
  }

  return `
  \\documentclass[letterpaper,11pt]{article}

  \\usepackage{latexsym}
  \\usepackage[empty]{fullpage}
  \\usepackage{titlesec}
  \\usepackage{marvosym}
  \\usepackage[usenames,dvipsnames]{color}
  \\usepackage{verbatim}
  \\usepackage{enumitem}
  \\usepackage[hidelinks]{hyperref}
  \\usepackage{fancyhdr}
  \\usepackage[english]{babel}
  \\usepackage{tabularx}
  \\input{glyphtounicode}

  \\pagestyle{fancy}
  \\fancyhf{} % clear all header and footer fields
  \\fancyfoot{}
  \\renewcommand{\\headrulewidth}{0pt}
  \\renewcommand{\\footrulewidth}{0pt}

  \\addtolength{\\oddsidemargin}{-0.5in}
  \\addtolength{\\evensidemargin}{-0.5in}
  \\addtolength{\\textwidth}{1in}
  \\addtolength{\\topmargin}{-.5in}
  \\addtolength{\\textheight}{1.0in}

  \\urlstyle{same}

  \\raggedbottom
  \\raggedright
  \\setlength{\\tabcolsep}{0in}

  \\titleformat{\\section}{
    \\vspace{-4pt}\\scshape\\raggedright\\large
  }{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

  \\pdfgentounicode=1

  \\newcommand{\\resumeItem}[1]{
    \\item\\small{
      {#1 \\vspace{-2pt}}
    }
  }

  \\newcommand{\\resumeSubheading}[4]{
    \\vspace{-2pt}\\item
      \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & #2 \\\\
        \\textit{\\small#3} & \\textit{\\small #4} \\\\
      \\end{tabular*}\\vspace{-7pt}
  }

  \\newcommand{\\resumeSubSubheading}[2]{
      \\item
      \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
        \\textit{\\small#1} & \\textit{\\small #2} \\\\
      \\end{tabular*}\\vspace{-7pt}
  }

  \\newcommand{\\resumeProjectHeading}[2]{
      \\item
      \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
        \\small#1 & #2 \\\\
      \\end{tabular*}\\vspace{-7pt}
  }

  \\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

  \\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

  \\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
  \\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
  \\newcommand{\\resumeItemListStart}{\\begin{itemize}}
  \\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

  \\begin{document}

  \\begin{center}
      \\textbf{\\Huge \\scshape ${basics?.name}} \\\\ \\vspace{1pt}
      \\small ${basics?.phone} $|$ \\href{mailto:${basics?.email}}{\\underline{${basics?.email}}} $|$ 
      ${formatProfiles(basics?.profiles)} $|$
  \\end{center}

  \\section{Education}
    ${formatEducation(education)}

  \\section{Experience}
    ${formatWork(work)}

  \\section{Projects}
    ${formatProjects(projects)}

  \\section{Technical Skills}
    ${formatSkills(skills)}

  \\end{document}
  `
}
