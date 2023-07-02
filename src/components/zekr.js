import { useEffect, useState } from "react";

const Zekr = ({ id, zekr, count, removeZekr }) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      if(localStorage.getItem(id)) {
        setCounter(JSON.parse(localStorage.getItem(id)));
      }
    }, [])
    
  return (
    <div data-id={id} className="zekrDiv"> 
    <button className="increase" onClick={() => {
        if (counter < count) {
          const newCounter = counter + 1;
            setCounter( newCounter);
            localStorage.setItem(id, JSON.stringify(newCounter));
        }
    }}>       
      <h2>{zekr}</h2>
      <span>{count} / {counter}</span>
      <button type="button" onClick={() => removeZekr(id)} className="remove">احذف الذكر</button>
    </button>  
    </div>
  )
}

export default Zekr;
