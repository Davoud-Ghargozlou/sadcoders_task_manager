import React from 'react'

function Card() {
    return (
      <div className="w-[897px] h-[34rem]	 flex flex-col gap-y-6 border-2 bg-slate-200">
        <header className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="public/comments.svg" className="w-5 h-5" />
            <h2 className="m-0 pl-2 text-black text-lg font-semibold not-italic leading-normal ">
              comments
            </h2>
          </div>
          <button className="w-40 h-12 border-2 flex justify-center items-center border-blue-400 rounded">
            <img src="public/Group (1).svg" />
            Add comment
          </button>
        </header>
        <textarea
          className=" w-[857px] h-[100px] p-[20px] rounded-md"
          placeholder="type tour comments here"
        ></textarea>
  
        <div className="flex justify-between items-start">
          <img src="public/Oval Copy 4.svg" className="w-[50px] h-[50px]" />
          <div className="pl-2">
            <div >
              <h2 >sara</h2>
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
          
            <img src="public/Oval Copy 3.svg" className="w-[50px] h-[50px]"/>
            <div className="pl-2">
            <div >
              <h2 >Anjelina</h2>
              <h2 >13 oct 2023</h2>
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