import Link from 'next/link'

export default function Navigation() {
    const Links = [
        {name: "Home", href: "/"},
        {name: "About", href: "/about"},
        {name: "Social", href: "/social"}
    ]

    return (
        <div className="flex w-full justify-between bg-gray-600 p-2">
            <h1>ArenJosiah Sagun</h1>
            <div className='flex gap-2'>
                {Links.map(link => <Link className='hover:text-gray-200' href={link.href}>{link.name}</Link>)}
            </div>
        </div>
    )
}