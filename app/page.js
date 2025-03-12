import styles from './styles.module.css';
import Image from 'next/image';
import { Inknut_Antiqua } from 'next/font/google'
const inknut = Inknut_Antiqua({ weight: '400', style: 'normal', subsets: ['latin'] });
export default function Page() {
    return (
        <div>
            <div className={styles.LOGO}>
                <h1 className={inknut.className}>The Embers of War</h1>
                <div className={styles.IMG}>
                    <Image
                        src="/logo.jpg"
                        width={371.18}
                        height={222}
                        alt="logo"
                        className={styles.JPG}
                    />
                </div>
            </div>
            <div>
                <div className={styles.SECTION1}>
                    <h1 className={styles.OC}>
                        organizing commitee
                        <h1 className={styles.AC}>
                            activities
                        </h1>
                    </h1>
                    
                </div>
                <div className={styles.SECTION2}>
                    <h1> join us </h1>
                
                </div>

            </div>


            

        </div>
    )
}