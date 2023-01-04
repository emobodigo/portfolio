import React from "react";
import profilePicture from "../assets/image/resume-img.png";
import {
    FaFacebookF,
    FaInstagramSquare,
    FaTwitter,
    FaLinkedinIn,
    FaDownload,
    FaCertificate
} from "react-icons/fa";
import { BsCalendar2Week, BsPinMap, BsMailbox, BsPhone } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";
import { MdSpeakerNotes } from "react-icons/md";
import { GiOrganigram } from "react-icons/gi";
import { VscOrganization } from "react-icons/vsc";
import { GrCertificate } from "react-icons/gr";
import ProfileInfo from "./ProfileInfo";
import ResumeCard from "./ResumeCard";

const ResumeSection = () => {
    return (
        <div id="resume" className="bg-abu">
            <div className="container w-10/12 py-32 mx-auto md:gap-4 md:flex">
                <div className="relative w-full pt-4 bg-white shadow-sm md:w-2/4 lg:w-2/5 rounded-2xl">
                    <div className="absolute top-0 w-32 h-32 overflow-hidden left-2/4 rounded-2xl -translate-x-2/4 -translate-y-2/4 ">
                        <img
                            src={profilePicture}
                            alt="profile"
                            className="object-cover object-top w-full h-full"
                        />
                    </div>
                    <p className="pt-20 text-xl text-center text-lumut">
                        Djohansyah <span className="font-semibold">Putra</span>
                    </p>
                    <p className="w-3/4 p-2 mx-auto mt-4 text-base text-center rounded-full shadow-md bg-abu text-lumut">
                        Fullstack Developer
                    </p>
                    <div className="flex items-center w-3/4 mx-auto my-6 justify-evenly">
                        <a href="#facebook">
                            <FaFacebookF className="text-gray-600 cursor-pointer hover:text-lumut" />
                        </a>
                        <a href="#twitter">
                            <FaTwitter className="text-gray-600 cursor-pointer hover:text-lumut" />
                        </a>
                        <a href="#linkedin">
                            <FaLinkedinIn className="text-gray-600 cursor-pointer hover:text-lumut" />
                        </a>
                        <a href="#facebook">
                            <FaInstagramSquare className="text-gray-600 cursor-pointer hover:text-lumut" />
                        </a>
                    </div>
                    <div className="w-full pt-1 pb-4 bg-gray-100">
                        <ProfileInfo
                            icon={
                                <BsCalendar2Week className="text-lg text-gray-600 place-self-center" />
                            }
                            value={"October 4, 1997"}
                        />
                        <ProfileInfo
                            icon={
                                <BsPinMap className="text-lg text-gray-600 place-self-center" />
                            }
                            value={"Jakarta, Indonesia"}
                        />
                        <ProfileInfo
                            icon={
                                <BsMailbox className="text-lg text-gray-600 place-self-center" />
                            }
                            value={"djohans33@gmail.com"}
                        />
                        <ProfileInfo
                            icon={
                                <BsPhone className="text-lg text-gray-600 place-self-center" />
                            }
                            value={"+62 821 4316 6721"}
                        />
                        <div className="flex items-center justify-center w-48 mx-auto mt-6 text-white rounded-full h-11 hover:bg-green-700 hover:animate-pulse bg-lumut">
                            <FaDownload className="text-lg" />
                            <span className="ml-3 text-md">Download CV</span>
                        </div>
                        <div className="hidden px-4 py-2 md:block xl:hidden">
                            <h3 className="relative mt-4 text-lg font-semibold text-lumut">
                                Organizations
                            </h3>
                            <ResumeCard icon={<GiOrganigram className="w-full text-lg text-white" />} color="oren" label={"IPPMA"} description={"General Secretary (11/2016 - 11/2017)"} />
                            <ResumeCard icon={<VscOrganization className="w-full text-lg text-white" />} color="oren" label={"Raion Community"} description={"Admin Division (10/2016 - 06/2018)"} />
                        </div>

                    </div>
                </div>
                <div className="mt-6 bg-white shadow-sm md:w-2/4 lg:w-3/5 md:mt-0 rounded-2xl">
                    <div className="p-4">
                        <h2 className="text-lumut text-xl relative font-semibold after:content-[''] after:absolute after:-bottom-2 after:rounded-full after:left-0 after:w-16 after:h-1 after:bg-tomato">
                            About Me
                        </h2>
                        <p className="mt-4 text-sm leading-loose text-lumut">
                            I'am Fullstack Developer from Jakarta, Indonesia, working in web,
                            hybrid mobile apps, and web games development. I enjoy turning
                            complex and custom problems into simple, adaptive, and intuitive
                            apps. Besides web development, i am also interested in movies and football.
                        </p>
                    </div>
                    <div className="w-full p-4 overflow-hidden bg-gray-100">
                        <h3 className="relative text-lg font-semibold text-lumut">
                            Language
                        </h3>
                        <div className="xl:flex xl:gap-3 xl:mt-2">
                            <ResumeCard icon={<RiEnglishInput className="w-full text-lg text-white" />} color="lumut" label="English" description="Advanced Level" />
                            <ResumeCard icon={<MdSpeakerNotes className="w-full text-lg text-white" />} color="lumut" label="Bahasa Indonesia" description="Proficiency Level" />
                        </div>
                        <div className="block md:hidden xl:block">
                            <h3 className="relative mt-4 text-lg font-semibold text-lumut">
                                Organizations
                            </h3>
                            <div className="xl:flex xl:gap-3 xl:mt-2">
                                <ResumeCard icon={<GiOrganigram className="w-full text-lg text-white" />} color="oren" label={"IPPMA"} description={"General Secretary (11/2016 - 11/2017)"} />
                                <ResumeCard icon={<VscOrganization className="w-full text-lg text-white" />} color="oren" label={"Raion Community"} description={"Admin Division (10/2016 - 06/2018)"} />
                            </div>
                        </div>

                        <h3 className="relative mt-4 text-lg font-semibold text-lumut">
                            Certificates
                        </h3>
                        <div className="xl:flex xl:gap-3 xl:mt-2">
                            <ResumeCard icon={<FaCertificate className="w-full text-lg text-white" />} color="tomato" label={"IT Competence"} description={"by Trust (02/2016 - Present)"} />
                            <ResumeCard icon={<GrCertificate className="w-full text-lg text-white" />} color="tomato" label={"TOEFL ITP"} description={"by BLC UB (10/2019 - 10/2021)"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeSection;
