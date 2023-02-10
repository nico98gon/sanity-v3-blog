import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export function StudioNavBar( props: any ) {
    return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-Nicode-rose flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-Nicode-rose mr-2" />
                Go To Website
            </Link>

            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-Nicode-rose">
                <h1 className="font-bold text-white">
                    check out my github
                </h1>
                <Link href="https://github.com/nico98gon"
                className="text-Nicode-rose font-bold ml-2"
                >
                    www.github.com/nico98gon
                </Link>
            </div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
    );
}