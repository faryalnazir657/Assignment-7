import Link from "next/link"

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center p-7'>
        <div className="flex gap-2  flex-col">
            <h1 className='text-white'>created by Faryal Bibi  </h1>
            <Link href="https://www.linkedin.com/in/faryal-nazir-90576a328/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BqTPoEZIkTTaSmYjR53abuA%3D%3D">Linkedln</Link>
            <Link href="https://github.com/faryalnazir657">Github</Link>
        </div>
    </footer>
  )
}

export default Footer