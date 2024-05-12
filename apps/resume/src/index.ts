import { Document, Packer } from 'docx'
import { mkdirp } from 'mkdirp'
import { readFile, writeFile } from 'node:fs/promises'
import { parse } from 'yaml'
import { ResumeFormat } from '../../shared'
import createEducationSection from './createEducationSection'
import createExperienceSection from './createExperienceSection'
import createSkillSection from './createSkillSection'
import createTitle from './createTitle'
import numbering from './numbering'
import styles from './styles'

const RESUME_FILE = 'resume.yaml'

const file = await readFile(`../../${RESUME_FILE}`, 'utf8')
const resume = (await parse(file)) as ResumeFormat
await mkdirp('out')

const document = new Document({
  sections: [
    {
      children: [
        createTitle(resume),
        createEducationSection(resume.education),
        createExperienceSection(resume.experience),
        createSkillSection(resume.skill)
      ].flat()
    }
  ],
  numbering,
  styles
})

const buffer = await Packer.toBuffer(document)
await writeFile('out/resume.docx', buffer)
