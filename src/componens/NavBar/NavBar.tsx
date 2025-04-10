import Image from "next/image";
import "./nav_bar.css"
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className={"nav_bar"}>
            <div className="container">
                <div className="nav_bar_content">
                    <Link href={'/'}>
                        <Image src={"image/p2pay_Logo.svg"} alt={"p2pay_Logo"} width={'120'} height={'70'}/>
                    </Link>
                    <ul>
                        <li className={'authorization'} >
                            {/*<Link href={""}>*/}
                            {/*    <Image src={"/image/profile-circle-svgrepo-com.svg"} alt={"profile"} width={32} height={32}/>*/}
                            {/*</Link>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
