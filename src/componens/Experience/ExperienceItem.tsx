import styles from "./experienceItem.module.sass"
import Image from "next/image";
import {Roboto} from "next/font/google";
import {FC} from "react";

const inter = Roboto({ subsets: ["latin"], weight: ["300"]});


interface IInterfaceItem {
    img: string
    name: string
    category: string
    text: string
}

const ExperienceItem: FC<IInterfaceItem>  =  ({img, name, category, text}) => {
    return (
        <div className={styles.experienceItem}>
            <div className={styles.experienceItem_logo_info} >
                <Image src={img} alt="logo_of_experience_item" width={100} height={100}/>
                <div className={styles.experienceItem_logo_text} >
                    <h4>{name}</h4>
                    <span className={inter.className} >{category}</span>
                </div>
            </div>
            <p className={inter.className} >
                {text}
            </p>
        </div>
    );
}

export default ExperienceItem;
