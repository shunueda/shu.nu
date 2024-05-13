import { Document, Packer } from 'docx'
import { mkdirp } from 'mkdirp'
import { readFile, writeFile } from 'node:fs/promises'
import type { ResumeFormat } from 'shared'
import { Config } from 'shared'
import { parse } from 'yaml'
import createEducationSection from './createEducationSection'
import createExperienceSection from './createExperienceSection'
import createSkillSection from './createSkillSection'
import createTitle from './createTitle'
import numbering from './numbering'
import styles from './styles'

const file = await readFile(`../../${Config.RESUME_FILE}`, 'utf8')
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
