import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-boldpx-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-full"
                        src="https://links.papareact.com/1m8"
                        width={50}
                        height={50}
                        alt="logo"
                    />
                </Link>
                <h1>THE PAPAFAM</h1>
            </div>

            <div></div>
        </header>
    )
}
