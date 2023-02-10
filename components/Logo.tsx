import Image from "next/image";
import logoImage from "./../assets/img/LogoNicommit.jpg";

export default function Logo( props: any ) {
    const { renderDefault, title } = props;

    return (
        <div className="flex items-center space-x-2">
            <Image
                className="rounded-full object-cover"
                height={50}
                width={50}
                src={logoImage}
                alt="logo"
            />
                <>{renderDefault(props)}</>
        </div>
    )
}
