import Form from "./form";
import Zekr from "./zekr";
import { useEffect, useState } from "react";

const Wrapper = () => {
    const [azkar, setAzkar] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('azkar') === null) {
            setAzkar([]);
        } else {
            setAzkar(JSON.parse(localStorage.getItem('azkar')))
        }
        
    }, []);

    const addZekr = (zekr, count) => {
        
      const newAzkar = [...azkar, {
        id: Date.now(),
        zekr,
        count
      }];
    
      setAzkar(newAzkar);
    
      localStorage.setItem('azkar', JSON.stringify(newAzkar));
    };

    const deleteZekr = (id) => {
      const newAzkar = azkar.filter((item) => item.id !== +id);
      setAzkar(newAzkar);
      localStorage.setItem('azkar', JSON.stringify(newAzkar));
    };

  return (
    <div>
      <Form addZekr={addZekr}/>
      <div className="azkar">
        {azkar.map((item) => (
            <Zekr key={item.id} zekr={item.zekr} count={item.count} id={item.id} removeZekr={deleteZekr}/>
        ))}
      </div>
    </div>
  )
};

export default Wrapper;