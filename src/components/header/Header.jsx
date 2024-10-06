import codeIcon from '../../assets/icons/frame.svg'
import night from '../../assets/icons/night.svg'
import styles from './styles.module.css'
import Button from '../buttons/Button'
import CodeIcon from '../icons/CodeIcon'
import NightIcon from '../icons/NightIcon'



export default function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={`${styles.header} container`}>
                <Button icon={<CodeIcon/>}>
                    WebSite Code
                </Button>
                <span className={styles.logo}>Contacts</span>
                <Button className='reverse' icon={<NightIcon/>}>
                    Night mode
                </Button>
            </div>
        </header>
    )
}