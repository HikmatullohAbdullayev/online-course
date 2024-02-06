import React, { useState } from "react";
import VectorIcon from "../assets/icon/VectorIcon";

function Accordion(props) {
  const [accordion, setAccordionOpen] = useState(false);

  const AccordionFunc = () => {
    setAccordionOpen(!accordion);
  };
  return (
    <div className=" border border-shadow p-4 rounded-8 ">
      <button
        onClick={AccordionFunc}
        className=" w-full  flex justify-between items-center p-10  bg-white border-b border-shadow mobile530:p-4"
      >
        <p  className="font-500 text-text18 text-start w-[80%]  ">{props.title}</p>
        <span className="w-50 h-50 flex flex-col justify-center transition-all ease-out  delay-300 rounded-6 bg-secondary text-name20 hover:bg-primary">
          {accordion ? "-" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-all ease-out  delay-300 overflow-hidden  ${
          accordion
            ? "grid-rows-[1fr] opacity-100 mt-0 "
            : "grid-rows-[0fr] opacity-0 mt-[-30px] "
        }`}
      >
        <div onClick={AccordionFunc} className="overflow-hidden ">
          <p  className={` font-400 text-text16 transition-all ease-out  delay-300  ${accordion ? "p-10 mt-20" : "p-0 mt-0"} overflow-hidden `}>
            {props.content1}
          </p>
        </div>
        <div onClick={AccordionFunc} className={`flex justify-between cursor-pointer items-center overflow-hidden transition-all ease-out  delay-300 ${accordion ? "p-20 mt-30 mobile530:p-10 mobile530:mt-18" : "p-0 mt-0"}  bg-shadow`}>
          <p className=" text-text16 font-500  ">{props.content2}</p>
          <span className={`fill-black transition-all ease-out  delay-300 ${accordion ? "p-12" : "p-0 "}  bg-white rounded-[50%]`}>
            <VectorIcon />
          </span>
        </div>
      </div>

      {}
    </div>
  );
}

export default Accordion;

// import React, { useState } from "react";

// const Accordion = ({ title, answer }) => {
//   const [accordionOpen, setAccordionOpen] = useState(false);

//   return (
//     <div className="py-2">
//       <button
//         onClick={() => setAccordionOpen(!accordionOpen)}
//         className="flex justify-between w-full"
//       >
//         <span>{title}</span>
//         {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
//         <svg
//           className="fill-indigo-500 shrink-0 ml-8"
//           width="16"
//           height="16"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect
//             y="7"
//             width="16"
//             height="2"
//             rx="1"
//             className={`transform origin-center transition duration-200 ease-out ${
//               accordionOpen && "!rotate-180"
//             }`}
//           />
//           <rect
//             y="7"
//             width="16"
//             height="2"
//             rx="1"
//             className={`transform origin-center rotate-90 transition duration-200 ease-out ${
//               accordionOpen && "!rotate-180"
//             }`}
//           />
//         </svg>
//       </button>
//       <div
//         className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
//           accordionOpen
//             ? "grid-rows-[1fr] opacity-100"
//             : "grid-rows-[0fr] opacity-0"
//         }`}
//       >
//         <div className="overflow-hidden">{answer}</div>
//       </div>
//     </div>
//   );
// };

// export default Accordion;
