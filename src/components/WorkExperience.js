import React from "react";

const WorkExperience = ({ color, jobTitle, desc, company, startDate, endDate, lastIndex = false }) => {
    let paddingBottom = lastIndex ? "" : "pb-6";
    return (
        <div className="md:flex md:gap-6">
            <div className="hidden md:block md:w-2/4">
                <p className="text-base font-semibold text-lumut">{company}</p>
                <p className="mt-1 text-sm text-lumut">{`${startDate} - ${endDate}`}</p>
            </div>
            <div className={`relative w-full ${paddingBottom} pl-8 border-l-2 border-dotted border-lumut md:w-2/4`}>
                <div className="absolute w-5 h-5 p-1 rounded-full flex item-center justify-center outline-dotted outline-2 outline-lumut top-1 z-10 -left-[0.7rem]">
                    <div className={`w-3 h-3 rounded-full bg-${color}`}></div>
                </div>
                <p className="text-lg font-semibold text-lumut">{jobTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-lumut">{desc}</p>
                <div className="mt-4 md:hidden">
                    <p className="text-base font-semibold text-lumut">{company}</p>
                    <p className="mt-1 text-sm text-lumut">{`${startDate} - ${endDate}`}</p>
                </div>
            </div>
        </div>


    );
};

export default WorkExperience;
