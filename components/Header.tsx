import Image from "next/image";
import Link from "next/link";
import logoImage from "./../assets/img/LogoNicommit.jpg"

export default function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-boldpx-10 py-5">
            <div className="flex items-center space-x-2 ml-5">
                <Link href="/">
                    <Image
                        className="rounded-full"
                        src={logoImage}
                        width={80}
                        height={80}
                        alt="logo"
                    />
                </Link>
                <h1 className="text-3xl text-Blogeate-rose">Blogeate</h1>
            </div>

            <div></div>
        </header>
    )
}
