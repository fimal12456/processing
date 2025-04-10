import styles from "./ourAdvantages.module.sass"
import {Roboto} from "next/font/google";
import Image from "next/image";


const inter = Roboto({ subsets: ["latin"], weight: ["400"]});
const interP = Roboto({ subsets: ["latin"], weight: ["300"]});


export default function OurAdvantages() {
    return (
        <article className={styles.our_advantages} >
            <div className="container">
                <div className={"our_advantages_content"}>
                    <h2 className={inter.className}>Помогаем бизнесу расти</h2>
                    <section className={styles.section_our_advantages}>
                        <Image src={"/image/our_advantages/_-22.png"} alt={"fast_conect"} width={633} height={499}/>
                        <div className={styles.section_content}>
                            <h3>Быстрое подключение</h3>
                            <p className={interP.className}>
                                Выгодные цены и мгновенные расчеты
                                Отсутствие Rolling Reserve, чарджбеков и Settlement fees
                                Settlement период T+0
                                Меньше отказов и диспутов!
                            </p>
                        </div>
                    </section>
                    <section className={styles.section_our_advantages}>
                        <div className={styles.section_content}>
                            <h3>Надежная и бесперебойная работа</h3>
                            <p className={interP.className}>
                                Меньше отказов и диспутов
                                Больше успешных операций с первой попытки — больше продаж. Средний показатель конверсии
                                платежного мерчанта составляет 87% по различным платежным методам и мерчантам.
                            </p>
                        </div>
                        <Image src={"/image/our_advantages/phone_2.png"} alt={"fast_conect"} width={533} height={499}/>
                    </section>
                    <section className={styles.section_our_advantages}>
                        <Image src={"/image/our_advantages/phone_3.png"} alt={"fast_conect"} width={533} height={490}/>
                        <div className={styles.section_content}>
                            <h3>Надежность</h3>
                            <p className={interP.className}>
                                Наше платежное решение работает на более чем 75% игровых проектов на территории РФ.
                                Работая с 2020 года мы обработали более 1000 платформ и успешно подключили мерчант.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </article>
    )
}