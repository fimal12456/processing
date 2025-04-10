import styles from "./experience.module.sass"
import ExperienceItem from "@/componens/Experience/ExperienceItem";


export default function Experience() {
    return (
        <section className={styles.experience} >
            <div className="container">
                <div className={"experience_content"} >
                    <h2>Опыт наших партнеров</h2>
                    <div className={styles.experience_items}>
                        <ExperienceItem img={"/image/exprerienceItems/1_xbet.jpg"} name={"1xbet"} category={"Букмекерская контора"} text={'"Работа с Wawe превосходит все наши ожидания. Отличная конверсия, минимум проблемных платежей и мгновенные сеттлменты именно то, что нужно каждому мерчанту."'} />
                        <ExperienceItem img={"/image/exprerienceItems/melbet.jpg"} name={"Melbet"} category={"Букмекерская контора"} text={'"Интеграция прошла быстро и легко. Отличные показатели: конверсия, условия и обработка данных! Коллеги всегда на связи и оперативно решают все вопросы. Надежный партнер, с которыми комфортно работать."'}  />
                        <ExperienceItem img={"/image/exprerienceItems/Piastrix.png"} name={"Piastrix"} category={"Электронный кошелек"} text={"Платежное решение подключили быстро, уже более года работаем с данной платформой. Очень приятно что условия подбираются под объем и всегда в пользу клиента, будем сотрудничать дальше!"}/>
                        <ExperienceItem img={"/image/exprerienceItems/1go.jpg"} name={"1go Casino"} category={"Казино"} text={"\"За все время использования не столкнулись ни с одной проблемой — платежи проходят мгновенно и безупречно. Высокая надежность и скорость транзакций впечатляют. А самое главное — условия действительно выгодные."}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
