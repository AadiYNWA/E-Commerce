import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import News from '../components/News'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dolores nisi deleniti? Sapiente, maiores libero ab alias dolor nesciunt ut veritatis quam totam ipsa. Ab doloribus sint eligendi natus sed.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo veritatis officiis ducimus quam dolorem dolorum accusantium magnam totam deleniti quasi numquam maxime quod labore error ad corporis, cumque nesciunt assumenda!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore perferendis excepturi aliquam quo aspernatur porro et asperiores officiis saepe, laboriosam ab quas, dolorum debitis tempora amet iure explicabo est.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit dolor, aut magni est delectus temporibus a architecto assumenda officiis numquam libero voluptatum voluptatem distinctio facilis inventore, ut accusamus. Laborum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit dolor, aut magni est delectus temporibus a architecto assumenda officiis numquam libero voluptatum voluptatem distinctio facilis inventore, ut accusamus. Laborum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Care</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit dolor, aut magni est delectus temporibus a architecto assumenda officiis numquam libero voluptatum voluptatem distinctio facilis inventore, ut accusamus. Laborum.</p>
        </div>
      </div>

      <News/>

      
    </div>
  )
}

export default About