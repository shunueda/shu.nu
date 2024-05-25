import { readFile } from 'node:fs/promises'
import { parse } from 'yaml'
import { Config } from './config'
import type { Profile } from './models'

const file = await readFile(`../../${Config.RESUME_FILE}`, 'utf8')
export const resume = (await parse(file)) as Profile
