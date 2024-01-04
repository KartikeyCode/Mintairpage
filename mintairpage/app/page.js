import Image from 'next/image'
import card from '@/public/card.svg'
import lights from '@/public/lights.png'
export default function Home() {
  return (
    <div className='w-screen h-screen bg-black'>

      <Image src={lights} className='absolute xl:w-[60rem] w-[30rem] h-[50rem] top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
      <Image src={card} className='absolute xl:w-[35rem] w-[20rem]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
    </div>
  )
}
