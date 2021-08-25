import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [massage, setMassage] = useState('Massage');
  const [data, setData] = useState('');
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   console.log('run every render....');
  // }); //log ทุกครั้งที่ state เปลี่ยน หรือมีการ render จะทำให้เกิด infinite loop

  useEffect(() => {
    console.log('Blank array dependency....');
  }, []); // ถ้าไม่ใส่อะไรใน [] จะทำงานครั้งแรกเมื่อ render ครั้งเดียว

  useEffect(() => {
    console.log(massage);
    console.log(data);
  }, [
    massage, //เมื่อ state massage เปลี่ยน จะสั่ง log แม้ว่าค่า state อื่นๆ เปลี่ยนไป แต่ถ้าใส่ ในนี้แค่ massage function ด้านในก็จะไม่ทำงาน
    //แต่ log ทำงานรอบแรกตอนที่ useState(''); เซ็ตค่าแรกของ massage เป็นค่าว่าง ทำให้มันทำงานเมื่อเริ่ม render 1ครั้ง gxHo ค่าว่าง
    // data
  ]);

  const changemassage = s => {
    setMassage(s);
    // console.log(massage);
    // asynchronous log ทำงานเสร็จก่อน setMassage(s); ทำให้ค่าที่ log เมื่อกด one two three จะได้ "" one two
  };

  return (
    <div className='App'>
      <h1>Massage : {massage}</h1>
      {/* <input
        type='text'
        value={massage}
        onChange={e => setMassage(e.target.value)}
        readOnly={toggle}
      /> */}
      <input
        type='text'
        value={massage}
        onChange={e => setMassage(e.target.value)}
        disabled={toggle}
      />
      <button
        onClick={() => {
          changemassage('one');
        }}>
        one
      </button>
      <button
        onClick={() => {
          changemassage('two');
        }}>
        two
      </button>
      <button
        onClick={() => {
          changemassage('three');
        }}>
        three
      </button>
      {/* <button
        onClick={e => {
          setData('555');
        }}>
        555
      </button>
      <button
        onClick={e => {
          setData('666');
        }}>
        666
      </button> */}
      <button
        onClick={() => {
          setToggle(previous => !previous); //กลับค่าจากปัจจุบัน จาก true เป็น false หรือจาก false เป็น true
        }}>
        Toggle
      </button>
    </div>
  );
}

export default App;
