import styles from './styles.module.css'
import Button from '../buttons/Button'
import CodeIcon from '../icons/CodeIcon'
import NightIcon from '../icons/NightIcon'

const Header = () => {
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
};

export default Header;