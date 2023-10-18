import React from 'react'
import InputCard from './InputCard';

const Info = [
    { name: "Username", placeholder: "Your username" },
    { name: "Password", placeholder: "Your password"  },
  ];
  
  function Input() {
    return (
      <section className="container w-100 h-80 flex flex-col bg-gray-300 py-6 px-4">
        {Info.map((item) => {
          return(
              <InputCard key={item.name}  text={item.name} placeholder={item.placeholder}>
                 <img src="/public/Group.svg"/>
              </InputCard>
          )
        })}
        <h3 className="text-xs font-medium m-0 not-italic text-gray-500">forget password?</h3>
      </section>
    );
  }

export default Input