import { resume } from 'shared'
import RoughNotation from './components/RoughNotation'

export default function Page() {
  return (
    <section>
      <h1 className='text-4xl font-semibold tracking-tighter'>
        <RoughNotation text={resume.name} />
      </h1>
      <div className='mt-10 mb-4'>
        Software engineer. Passionate about using technology to solve real-world
        problems.
      </div>
      {resume.experience.map((experience, i) => (
        <div className='my-8' key={i}>
          <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2'>
            <p className='text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums'>
              {experience.start_date} - {experience.end_date}
            </p>
            <div className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
              <p className='font-bold'>{experience.company}</p>
              <p>{experience.position}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
