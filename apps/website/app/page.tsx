import { resume } from 'shared'

export default function Page() {
  return (
    <section>
      <h1 className='text-4xl font-semibold tracking-tighter'>{resume.name}</h1>
      <h2 className='font-semibold tracking-tighter text-sm mb-8'>
        {resume.email}
      </h2>
      <div className='mb-4'>
        Software engineer & coffee toffee lover. Passionate about using
        technology to solve real-world problems.
      </div>
      {resume.experience.map(experience => (
        <div className='my-8'>
          <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2'>
            <p className='text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums'>
              {experience.start_date} - {experience.end_date}
            </p>
            <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
              <b>{experience.company}</b> - {experience.position}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
