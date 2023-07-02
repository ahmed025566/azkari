import { useState } from "react";

const Form = ({ addZekr }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addZekr(zker, count);
        setCount('');
        setZker('');
       
    }
    const [zker, setZker] = useState('');
    const [count, setCount] = useState('');
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="اضف الذكر هنا" className="zker" onChange={(e) => setZker(e.target.value)} value={zker}></input>
      <input type="text" placeholder="اضف العدد" className="count" onChange={(e) => setCount(e.target.value)} value={count}></input>
      <button type="submit" className="submit">اضافة</button>
    </form>
  )
}

export default Form;
