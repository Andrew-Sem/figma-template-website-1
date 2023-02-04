import {FC} from 'react';
import Link from "next/link";
import {ArrowLongRightIcon, ChevronDownIcon} from "@heroicons/react/20/solid";

export const Header: FC = () => {
    return (
        <div className={"flex justify-between container mx-auto my-6"}>
            <div className={"flex items-center"}>
                <div className={"font-title text-xl"}>Global Talk</div>
                <div className={"mx-8 w-[1px] h-4 rounded bg-gray-300"}></div>
                <nav className={"flex items-center space-x-8 text-base"}>
                    <Link href={"/"} className={""}>Home</Link>
                    <Link href={"/textbook"} className={"text-gray-500"}>Textbook</Link>
                    <Link href={"/statistics"} className={"text-gray-500"}>Statistics</Link>
                    <Link href={"/games"} className={"text-gray-500 flex items-center"}>Games <ChevronDownIcon
                        className={"w-4 h-4 pt-0.5"}/></Link>
                </nav>
            </div>
            <div className={"flex items-center"}>
                <div
                    className={"w-10 h-10 rounded-full text-cyan-600 bg-cyan-500/30 flex items-center justify-center"}>A
                </div>
                <div className={"text-base ml-2 text-gray-500"}>Alex</div>
                <div className={"flex ml-8 items-center"}>Sign Out <ArrowLongRightIcon className={"w-4 h-4 pt-0.5"}/></div>
            </div>
        </div>
    );
}
