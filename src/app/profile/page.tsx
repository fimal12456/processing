import styles from "./profile.module.sass"
import {Roboto} from "next/font/google";
import Link from "next/link";


const inter = Roboto({ subsets: ["latin"], weight: ["300"]});
const interH3 = Roboto({ subsets: ["latin"], weight: ["500"]});

const interCreateAccount = Roboto({ subsets: ["latin"], weight: ["400"]});



export default function Profile() {
    return (
        <div className={styles.profile} >
            <div className={styles.profile_content}>
                <h3 className={interH3.className} >Авторизация</h3>
                <div className={styles.profile_inputs}>
                    <div className={styles.email}>
                        <label className={inter.className} htmlFor="email">Email</label>
                        <input type="text" placeholder={"janedoe@gmail.com"}/>
                    </div>
                    <div className={styles.password}>
                        <label className={inter.className} htmlFor="email">Пароль</label>
                        <input type="text" placeholder={'введите свой пароль'}/>
                    </div>
                </div>
                <button className={styles.login_button}>Войти</button>
                <div className={interCreateAccount.className} >
                    <div className={styles.create_account}>
                        <Link href={"/create_account"}>Создать аккаунт</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
