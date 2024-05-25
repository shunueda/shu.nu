import { mkdirp } from 'mkdirp'
import { writeFileSync } from 'node:fs'
import { Profile, resume } from 'shared'
import escapeLatex from './util/escapeLatex'

// Generate the LaTeX content
const generateLaTeX = (data: Profile): string => {
  const educationSection = data.education
    .map(edu => {
      const degrees = edu.degrees
        .map(deg => `${deg.type} in ${escapeLatex(deg.major)}`)
        .join('; ')
      return `
    \\resumeSubheading
      {${escapeLatex(edu.school)}}{}{${degrees}}{${escapeLatex(edu.start_date)} -- ${escapeLatex(edu.end_date)}}`
    })
    .join('\n')

  const experienceSection = data.experience
    .map(exp => {
      const descriptions = exp.descriptions
        .map(desc => `\\resumeItem{${escapeLatex(desc)}}`)
        .join('\n        ')
      return `
    \\resumeSubheading
      {${escapeLatex(exp.company)}}{${escapeLatex(exp.location)}}
      {${escapeLatex(exp.position)}}{${escapeLatex(exp.start_date)} -- ${escapeLatex(exp.end_date)}}
      \\resumeItemListStart
        ${descriptions}
      \\resumeItemListEnd`
    })
    .join('\n')

  const skillsSection = Object.entries(data.skill)
    .map(([category, skills]) => {
      const skillsList = skills.map(skill => escapeLatex(skill)).join(', ')
      return `\\resumeSubItem{\\textbf{${escapeLatex(category)}:} ${skillsList}}`
    })
    .join('\n    ')

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

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\LARGE \\scshape ${escapeLatex(data.name)}} \\\\ \\vspace{1pt}
    \\small ${escapeLatex(data.phone)} $|$ \\href{mailto:${escapeLatex(data.email)}}{\\underline{${escapeLatex(data.email)}}} $|$ 
    \\href{https://${escapeLatex(data.website)}}{\\underline{${escapeLatex(data.website)}}} $|$
    \\href{https://github.com/${escapeLatex(data.github)}}{\\underline{https://github.com/${escapeLatex(data.github)}}}
\\end{center}


%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    ${educationSection}
  \\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart
    ${experienceSection}
  \\resumeSubHeadingListEnd

%-----------TECHNICAL SKILLS-----------
\\section{Technical Skills}
  \\resumeSubHeadingListStart
    ${skillsSection}
  \\resumeSubHeadingListEnd

%-------------------------------------------
\\end{document}
`
}

// Write the LaTeX content to a file
const latexContent = generateLaTeX(resume)
await mkdirp('out')
writeFileSync('out/resume.tex', latexContent)

console.log('The resume has been generated!')
