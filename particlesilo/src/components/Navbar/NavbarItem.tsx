import Link from 'next/link'

interface INavbarItemProps {
    title:string, 
    route: string
}

export default function NavbarItem({title, route} : INavbarItemProps){
    return <Link href={`${route}`} className="flex-initial w-auto py-2"><div className='text-white-500 font-semibold hover:text-blue-400 hover:underline hover:font-bold'>{title}</div></Link>
}