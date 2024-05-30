import { useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Counter() {
  let [counterTrigger, setCounterTrigger] = useState(false);
  return (
    <>
      <div className="main-counter container">
        <div className="container-counter">
            <p className="title-counter">عملاء شركة ابعاد العقارية</p>
          <ScrollTrigger
            onEnter={() => setCounterTrigger(true)}
            onExit={() => {
              setCounterTrigger(false);
            }}
          >
            {counterTrigger && (
              <h1 className="counter"> + 
                <CountUp start={180} end={386} duration={2} />
              </h1>
            )}
         
          </ScrollTrigger>
        </div>
        <div className="container-counter">
            <p className="title-counter"> الوحدات المباعة لدي شركة أبعاد</p>
          <ScrollTrigger
            onEnter={() => setCounterTrigger(true)}
            onExit={() => {
              setCounterTrigger(false);
            }}
          >
            {counterTrigger && (
              <h1 className="counter"> + 
                <CountUp start={200} end={435} duration={3} />
              </h1>
            )}
         
          </ScrollTrigger>
        </div>
        <div className="container-counter">
            <p className="title-counter title-counter-s">عدد الوحدات المتاحة للبيع حاليا</p>
          <ScrollTrigger
            onEnter={() => setCounterTrigger(true)}
            onExit={() => {
              setCounterTrigger(false);
            }}
          >
            {counterTrigger && (
              <h1 className="counter counter-s"> + 
                <CountUp start={20} end={162} duration={3} />
              </h1>
            )}
         
          </ScrollTrigger>
        </div>
        <div className="container-counter">
            <p className="title-counter">عدد المشاريع لدى شركة أبعاد</p>
          <ScrollTrigger
            onEnter={() => setCounterTrigger(true)}
            onExit={() => {
              setCounterTrigger(false);
            }}
          >
            {counterTrigger && (
              <h1 className="counter"> + 
                <CountUp start={20} end={46} duration={2} />
              </h1>
            )}
         
          </ScrollTrigger>
        </div>
      </div>

      {/* <h1 className="counter">counter component</h1>

<ScrollTrigger onEnter={() => setCounterTrigger(true)} onExit={() => setCounterTrigger(false)}> 

</ScrollTrigger>
{
    counterTrigger &&         <h1>

    <CountUp start={0}
end={1000}
duration={1} 
separator=" "
/>
    </h1>
} */}
    </>
  );
}
