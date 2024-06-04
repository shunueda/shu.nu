import { formatDateToLatex, LinkedInProfile } from 'shared'

function escapeLatex(str: string): string {
  return str.replace(/[&%$#_{}~^\\]/g, char => `\\${char}`)
}

function buildSection(title: string, content: string): string {
  return content
    ? `
     \\section{${escapeLatex(title)}}
       ${content}
   `
    : ''
}

function buildSubheading(
  institution: string,
  location: string,
  studyType: string,
  area: string,
  startDate: string,
  endDate: string
): string {
  return `
     \\resumeSubheading
       {${escapeLatex(institution)}}{\\small ${escapeLatex(location)}}
       {${escapeLatex(studyType)} ${area ? `: ${escapeLatex(area)}` : ''}}{${formatDateToLatex(startDate, endDate)}}
   `
}

function buildResumeItemList(items: string[]): string {
  return items.length
    ? `
     \\resumeItemListStart
       ${items.map(item => `\\resumeItem{${escapeLatex(item)}}`).join('\n')}
     \\resumeItemListEnd
   `
    : ''
}

export default function generateLatex(profile: LinkedInProfile): string {
  const { basics, education, work, projects, skills } = profile

  const buildEducation = () => {
    if (!education || education.length === 0) return ''
    return `
       \\resumeSubHeadingListStart
         ${education
           .map(edu =>
             buildSubheading(
               edu.institution || '',
               'Bethlehem, PA', // assuming location is Bethlehem, PA
               edu.studyType || '',
               edu.area || '',
               edu.startDate || '',
               edu.endDate || ''
             )
           )
           .join('\n')}
       \\resumeSubHeadingListEnd
     `
  }

  const buildWork = () => {
    if (!work || work.length === 0) return ''
    return `
       \\resumeSubHeadingListStart
         ${work
           .map(
             job => `
           \\resumeSubheading
             {${escapeLatex(job.name || '')}}{\\small ${escapeLatex(job.location || '')}}
             {${escapeLatex(job.position || '')}}{${formatDateToLatex(job.startDate, job.endDate)}}
             \\resumeItemListStart
               ${job.summary
                 ?.split('• ')
                 .filter(Boolean)
                 .map(
                   highlight => `\\resumeItem{${escapeLatex(highlight.trim())}}`
                 )
                 .join('\n')}
             \\resumeItemListEnd
         `
           )
           .join('\n')}
       \\resumeSubHeadingListEnd
     `
  }

  const buildProjects = () => {
    if (!projects || projects.length === 0) return ''
    return `
       \\resumeSubHeadingListStart
         ${projects
           .map(
             project => `
           \\resumeProjectHeading
             {\\textbf{${escapeLatex(project.name || '')}} $|$ \\emph{${escapeLatex((project.keywords || []).join(', '))}}}{${formatDateToLatex(project.startDate, project.endDate)}}
             ${buildResumeItemList(project.highlights || [])}
         `
           )
           .join('\n')}
       \\resumeSubHeadingListEnd
     `
  }

  const buildSkills = () => {
    if (!skills || skills.length === 0) return ''
    return `
       \\begin{itemize}[leftmargin=0.15in, label={}]
         \\small{\\item{
           ${skills.map(skill => `\\textbf{${escapeLatex(skill.name || '')}}${skill.keywords ? ': ' + escapeLatex(skill.keywords.join(', ')) : ''}`).join(' \\\\ ')}
         }}
       \\end{itemize}
     `
  }

  const educationSection = buildEducation()
  const workSection = buildWork()
  const projectsSection = buildProjects()
  const skillsSection = buildSkills()

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
     \\fancyhf{}
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
         \\textbf{\\Huge \\scshape ${escapeLatex(basics?.name || '')}} \\\\ \\vspace{1pt}
         \\small ${escapeLatex(basics?.phone || '')} $|$ \\href{mailto:${escapeLatex(basics?.email || '')}}{\\underline{${escapeLatex(basics?.email || '')}}} $|$ 
         \\href{${escapeLatex(basics?.profiles?.find(p => p.network === 'LinkedIn')?.url || '')}}{\\underline{${escapeLatex(basics?.profiles?.find(p => p.network === 'LinkedIn')?.url || '')}}} $|$
         \\href{${escapeLatex(basics?.profiles?.find(p => p.network === 'GitHub')?.url || '')}}{\\underline{${escapeLatex(basics?.profiles?.find(p => p.network === 'GitHub')?.url || '')}}}
     \\end{center}
     ${buildSection('Education', educationSection)}
     ${buildSection('Experience', workSection)}
     ${buildSection('Projects', projectsSection)}
     ${buildSection('Technical Skills', skillsSection)}
     \\end{document}
   `
}
