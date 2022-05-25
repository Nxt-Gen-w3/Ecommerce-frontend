import { React, useState } from "react";
function FAQ() {
  let [state, setState] = useState(null);

  let handleClick = (each, index) => {
    setState((state = state == index ? null : index));
  };

  let questions = [
    {
      Q: "Who is it for?",
      A: "Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.",
    },
    {
      Q: "Does AltCampus help me get a job?",
      A: "Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.",
    },
    {
      Q: "How does the entire process work?",
      A: "You can read about it here - How it works.",
    },
    {
      Q: "Is this course self-paced or batched?",
      A: "This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.",
    },
  ];
  return (
    <>
      <div className="FAQ">
        <section className="container flex justify-center items-center h-full">
          <div className="w-8/12 border-2 m-auto transition-all ">
            <h2 className="text-2xl font-extrabold">
              Frequently Ask Questions
            </h2>
            {questions.map((each, index) => (
              <>
                <div
                  className="mt-5 border p-2 py-4 flex justify-between"
                  onClick={() => handleClick(each, index)}
                >
                  <h2>Q. {each.Q}</h2>
                  <p>{state === index ? <span>👆</span> : <span>👇</span>}</p>
                </div>
                {index == state ? (
                  <p className="mt-4 border p-2 py-4 bg-slate-200 transition-all">
                    A. {each.A}
                  </p>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
export default FAQ;
