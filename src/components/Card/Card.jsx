import React from 'react'
import Button from '@/components/UI/Button';

function Card() {
    return (
      <div className="w-auto h-auto	 flex flex-col gap-y-6 border-2 bg-slate-200">
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="./comments.svg" className="w-5 h-5" />
          <h2 className="m-0 pl-2 text-black text-lg font-semibold not-italic leading-normal ">
            comments
          </h2>
        </div>
       
        <Button variant="one" size="lg">
        <img src='public/Group (1).svg' className='pr-2'/>
        <p className='text-base text-[#3758F9]'>Add comment</p>
        </Button>
      </header>
      <textarea
        className="p-[20px] rounded-md"
        placeholder="type tour comments here"
      ></textarea>

      <div className="flex justify-between items-start">
        <img src="./Oval Copy 4.svg" className="w-[50px] h-[50px]" />
        <div className="pl-2">
          <div>
            <h2>sara</h2>
            <h2>23 oct 2023</h2>
          </div>

          <p className="text-base">
            Engaging in this task is truly an exhilarating experience that fills
            me with a sense of wonder and enthusiasm. The excitement and
            satisfaction derived from the challenges it presents are
            immeasurable, and it allows me to tap into my creativity and
            problem-solving skills, fostering personal growth and achievement.
            In this remarkable endeavor, I find inspiration and motivation to
            push my boundaries, unlocking new potentials while embracing the
            joys of learning and accomplishment.
          </p>
        </div>
      </div>

      <div className="flex  items-start">
        
          <img src="./Oval Copy 3.svg" className="w-[50px] h-[50px]"/>
          <div className="pl-2">
          <div>
            <h2>Anjelina</h2>
            <h2>13 oct 2023</h2>
          </div>
       
        <p>
          Engaging in this task is truly an exhilarating experience that fills
          me with a sense of wonder and enthusiasm.
        </p>
         </div>
      </div>
    </div>
    );
  }
export default Card