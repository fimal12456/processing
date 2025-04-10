import styles from "./trustUs.module.sass"
import {Roboto} from "next/font/google";
import Image from "next/image";


const inter = Roboto({ subsets: ["latin"], weight: ["400"]});

export default function TrustUs() {
    return (
        <section className={styles.trustUs} >
            <div className="container">
                <div className={styles.trustUs_content}>
                    <h2 className={inter.className}>Нам доверяют</h2>
                    <div className={styles.trustUs_imgs} >
                        <Image src={"/image/trust_us/1_xbet.svg"} alt={"1_xbet"} height={133} width={300}/>
                        <Image src={"/image/trust_us/_12412-6.png"} alt={"_12412-6"} height={94} width={260}/>
                        <Image src={"/image/trust_us/leon-Dq4LVI3b.svg"} alt={"leon"} height={67} width={260}/>
                        <Image src={"/image/trust_us/logo-ftr.png"} alt={"ftr"} height={87} width={260}/>
                        <Image src={"/image/trust_us/logo-ftr (1).png"} alt={"1_go"} height={87} width={260}/>
                        <Image src={"/image/trust_us/marsdao-BZenK0CH.svg"} alt={"marsdao"} height={37} width={260}/>
                        <Image src={"/image/trust_us/pajyeer.png"} alt={"pajyeer"} height={94} width={260}/>
                        <Image src={"/image/trust_us/mostbet-CdRjxv_N.svg"} alt={"mostbet"} height={49} width={260}/>
                        <Image src={"/image/trust_us/spin_better.svg"} alt={"spin_better"} height={133} width={300}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
