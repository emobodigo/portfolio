import React from 'react'
import WorkExperience from './WorkExperience';

const ExperienceSection = () => {
    const workExp = [
        {
            color: "lumut",
            jobTitle: "Software Engineer",
            desc: "Analysis requirement, design and implement database structure,coding Front-end and Backend. Build custom applications (POS, CMS, E-Commerce), build a hybrid mobile apps, supervise and lead intern programmer",
            company: "Coralis Studio",
            startDate: "July 2020",
            endDate: "Present",
        },
        {
            color: "oren",
            jobTitle: "Web Developer Intern",
            desc: "Develop the official website for the office. Resolved maintenance problems, improved operations and provided exceptional client support. Maintained excellent attendance record, consistently arriving to work on time. Learned how to complete Backend and Frontend with minimal supervision, contributing to successful project.",
            company: "Communication and Information Office of Malang Regency",
            startDate: "July 2018",
            endDate: "September 2018",
        },
    ];
    return (
        <div id="experience" className="py-6 bg-abu">
            <div className="container w-10/12 mx-auto">
                <h2 className="hidden pb-6 text-2xl font-semibold text-center md:block text-lumut">My Work Experience</h2>
                {workExp.map((value, index) => {
                    let lastIndex = false;
                    if (workExp.length - 1 === index) {
                        lastIndex = true;
                    }
                    return (
                        <WorkExperience
                            key={index}
                            color={value.color}
                            jobTitle={value.jobTitle}
                            desc={value.desc}
                            company={value.company}
                            startDate={value.startDate}
                            endDate={value.endDate}
                            lastIndex={lastIndex}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ExperienceSection
