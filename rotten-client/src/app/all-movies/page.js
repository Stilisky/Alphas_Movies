import Image from 'next/image'
import Billboard from '../components/Billboard'
import MoviesLists from '../components/MoviesLists'

export default function Home() {
  return (
    <main>
      <Billboard/>
      <div className='pb-40'>
        <MoviesLists text="Upcomming"/>
      </div>
    </main>
  )
}
