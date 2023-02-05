import {TextAndDescription} from "@/components/UI/TextAndDescription";
import {Button} from "@/components/UI/Button";
import {BoltIcon, PuzzlePieceIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
    return (
        <div className={"bg-gray-100 h-[740px]"}>
            <div className={"container mx-auto"}>
                <div className={"py-20 flex"}>
                    <div className={"w-2/5"}>
                        <div className={"uppercase text-cyan-600 text-base mb-6"}>e-course platform</div>
                        <TextAndDescription
                            title={"Learning and teaching online made easy."}
                            description={"Practice your English and learn new things with the platform."}
                        />
                        <Button title={"About platform"} className={"mt-8"}/>
                        <div className={"flex mt-12"}>
                            <div className={"flex flex-col items-center"}>
                                <div className={"font-title text-4xl flex items-center"}>
                                    <BoltIcon className={"w-7 h-7 text-cyan-600 pt-0.5"}/>
                                    600<span className={"text-cyan-600"}>+</span>
                                </div>
                                <div className={"text-gray-500 text-base"}>Popular words</div>
                            </div>
                            <div className={"mx-8 w-[1px] rounded bg-gray-300"}></div>
                            <div className={"flex flex-col items-center"}>
                                <div className={"font-title text-4xl flex items-center"}>
                                    <PuzzlePieceIcon className={"w-7 h-7 text-cyan-600 pt-0.5"}/>
                                    2<span className={"text-cyan-600"}>+</span>
                                </div>
                                <div className={"text-gray-500 text-base"}>Mini games</div>
                            </div>
                        </div>
                    </div>
                    <div className={"relative w-3/5"}>
                        <Image src={"/img/image6.png"} alt={"Cactus"} width={143} height={171}
                               className={"absolute top-[187px]"}/>
                        <Image
                            className={"z-10 absolute left-[52px]"}
                            src={"/img/casual-life-3d-boy-sitting-at-the-desk-with-open-book9.png"} alt={"Cactus"}
                            width={608} height={507}/>
                        <Image
                            className={"absolute top-[30px] left-[344px]"}
                            src={"/img/image12.png"} alt={"Cactus"} width={536} height={571}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
