import { readdirSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function getPageTitles(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  res.status(200).json([
    'home',
    ...readdirSync('src/components/pages')
      .filter(fileName => fileName.endsWith('.tsx') && fileName !== 'home.tsx')
      .map(fileName => fileName.replace('.tsx', ''))
  ])
}
