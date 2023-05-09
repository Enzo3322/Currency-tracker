import styles from './styles.module.scss'

const Card = ({ icon, title, value }: { icon: any, title: string, value: string }) => {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                {icon}
            </div>
            <div className={styles.textContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.value}>R${value}</p>
            </div>
        </div>
    )
}

export default Card