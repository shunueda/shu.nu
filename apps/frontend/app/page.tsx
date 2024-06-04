import database from '@/lib/postgres/database'
import { formatDateToLatex } from 'shared'

export default async function Page() {
  const { data: linkedInProfile } = await database
    .selectFrom('linkedin_profile')
    .selectAll()
    .orderBy('id', 'desc')
    .executeTakeFirst()
  return (
    <section>
      <h1 className='text-4xl font-semibold tracking-tighter'>
        {linkedInProfile.basics.name}
      </h1>
      <h2 className='font-semibold tracking-tighter text-sm mb-8'>
        {linkedInProfile.basics.email}
      </h2>
      <div className='mb-4'>{linkedInProfile.basics.summary}</div>
      {linkedInProfile.work.map((experience, i) => (
        <div className='my-8' key={i}>
          <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2'>
            <p className='text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums'>
              {formatDateToLatex(
                experience.startDate,
                experience.endDate
              ).replace('--', '—')}
            </p>
            <div className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
              <p className='font-bold'>{experience.name}</p>
              <p>{experience.position}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
