import styles from "./header.module.sass"
import Image from "next/image";
import {Roboto} from "next/font/google";


const inter = Roboto({ subsets: ["latin"], weight: ["300"]});

export default function Header() {
    return (
        <header className={styles.header} >
            <div className="container">
                <div className={styles.header_content}>
                    <Image className={styles.img_header} src="/image/header_img.png" width={660} height={433} alt="Header" />
                    <div className={styles.header_content_text}>
                        <h1>Платежное решение для High Risk проектов</h1>
                        <div className={inter.className} >
                            <p>Надежная и бесперебойная работа</p>
                            <p>Архитектура системы гарантирует стойкость к нагрузкам и неограниченное количество транзакций.</p>
                        </div>
                        <div className={styles.header_buttons}>
                            <a href="https://t.me/Igor_SD2">
                                <button>Отправить заявку</button>
                            </a>
                            <a href="https://t.me/Igor_SD2">
                                <button className={styles.button_traider}>Стать трейдером</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
