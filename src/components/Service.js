import StackDisplay from "./StackDisplay";
import { IoDesktopOutline } from "react-icons/io5";
import CardService from "./CardService";
import { MdPhoneAndroid, MdVideogameAsset } from "react-icons/md";

const Service = () => {
    return (
        <div id="service">
            <div className="container relative w-10/12 min-h-screen lg:min-h-[70vh] xl:min-h-screen pt-12 xl:pt-28 mx-auto">
                <div className="flex flex-col md:gap-16 md:justify-between xl:flex-row">
                    <div className="order-1 xl:order-2 xl:w-2/4">
                        <h2 className="text-4xl font-semibold text-lumut">What do i do?</h2>
                        <p className="mt-4 text-base leading-loose text-lumut">
                            As a fullstack engineer, i have developed a lot of projects,
                            mainly focusing on web development. i have created several types
                            of project including Point of Sales (POS) app, Customer Management
                            System (CMS) App, E-Commerce App, Accounting App, and etc.
                        </p>
                        <p className="mt-5 text-base leading-loose text-lumut">
                            Moreover i also develop Hybrid Mobile Apps using Cordova, web
                            based game, and currently working on developing Solana Smart
                            Contract (NFT)
                        </p>
                        <div className="grid w-full grid-cols-2 gap-4 mt-6">
                            <div>
                                <p className="text-4xl font-semibold text-center hover:animate-bounce text-lumut">
                                    285
                                </p>
                                <p className="text-sm text-center text-lumut">
                                    Project Completed
                                </p>
                            </div>
                            <div>
                                <p className="text-4xl font-semibold hover:animate-bounce text-center text-lumut">
                                    190
                                </p>
                                <p className="text-sm text-center text-lumut">Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-2 py-5 md:mx-auto md:w-3/4 xl:w-2/6 md:pt-4 lg:pt-0 xl:order-1">
                        <CardService
                            icon={<IoDesktopOutline className="text-2xl text-white" />}
                            bgColor={"bg-lumut"}
                            number={15}
                            title={"Web Development"}
                        />
                        <CardService
                            icon={<MdPhoneAndroid className="text-2xl text-white" />}
                            bgColor={"bg-oren"}
                            number={1}
                            title={"Hybrid Mobile Apps"}
                        />
                        <CardService
                            icon={<MdVideogameAsset className="text-2xl text-white" />}
                            bgColor={"bg-tomato"}
                            number={1}
                            title={"Web Game Dev"}
                        />
                    </div>
                </div>
            </div>
            <div className="grid w-full h-40 grid-cols-4 gap-3 p-4 mt-5 mb-10 place-items-center md:hidden bg-abu">
                <StackDisplay heroMode={false} />
            </div>
        </div>
    );
};

export default Service;
