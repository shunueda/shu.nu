import Link from 'next/link'

export const navItems: Record<string, string> = {
  github: 'https://github.com/shunueda',
  resume: '/resume.pdf',
  instagram: 'https://www.instagram.com/shun_ueda/'
}

export function Navbar() {
  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav
          className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
          id='nav'
        >
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems).map(([name, path]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1'
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
