import { CurrencyContext } from "@/service/getCurrency"
import { useContext, useEffect, useState } from "react"
import Card from "../Card"
import styles from './styles.module.scss'

const CardList = () => {
    const { data, error, isLoading, mutate } = useContext(CurrencyContext)
    const [sortBy, setSortBy] = useState<'asc' | 'desc'>('desc')
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        mutate()
    }, [])

    if (error) {
        return <p>Erro ao carregar moedas</p>
    }

    if (!data || isLoading) return (
        <p>
            Carregando moedas...
        </p>
    )

    const coins = Object.values(data) as any[]

    const removeAccents = (str: string) =>
        str
            ?.normalize('NFD')
            ?.replace(/[\u0300-\u036f]/g, '')
            ?.toLowerCase();

    const orderBy = (param: 'asc' | 'desc' | undefined) => {
        if (param === 'asc') return coins.sort((a, b) => a.bid - b.bid)

        if (param === 'desc') return coins.sort((a, b) => b.bid - a.bid)

        return coins
    }

    const currentList = orderBy(sortBy).filter(coin => removeAccents(coin.name.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase())))

    return (
        <div>
            <div className={styles.sortByContainer}>
                <button onClick={() => setSortBy('desc')} className={sortBy === 'desc' ? 'active' : ''}>Maior preço</button>
                <button onClick={() => setSortBy('asc')} className={sortBy === 'asc' ? 'active' : ''}>Menor preço</button>
            </div>
            <div className={styles.search}>
                <input type="text" placeholder="Ex: Dólar canadense" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className={styles.grid}>
                {
                    currentList?.map((currency: any, i: number) => {
                        return <Card title={currency?.name} value={currency?.bid} icon={<svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="80" height="80" rx="8" fill="url(#paint0_linear_5_162)" />
                            <g clip-path="url(#clip0_5_162)">
                                <path d="M49.494 31.5714C49.0793 30.3948 48.322 29.3693 47.3195 28.6267C46.3171 27.8841 45.1153 27.4586 43.869 27.4048H35.5356C33.878 27.4048 32.2883 28.0632 31.1162 29.2353C29.9441 30.4074 29.2856 31.9972 29.2856 33.6548C29.2856 35.3124 29.9441 36.9021 31.1162 38.0742C32.2883 39.2463 33.878 39.9048 35.5356 39.9048H43.869C45.5266 39.9048 47.1163 40.5632 48.2884 41.7353C49.4605 42.9074 50.119 44.4972 50.119 46.1548C50.119 47.8124 49.4605 49.4021 48.2884 50.5742C47.1163 51.7463 45.5266 52.4048 43.869 52.4048H35.5356C34.2893 52.3509 33.0875 51.9254 32.0851 51.1828C31.0826 50.4402 30.3253 49.4147 29.9106 48.2381" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M40 21.4524V27.7024M40 52.7024V58.9524" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_5_162" x1="40" y1="0.5" x2="40" y2="80.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DD2ACB" />
                                    <stop offset="1" stop-color="#2A87DD" />
                                </linearGradient>
                                <clipPath id="clip0_5_162">
                                    <rect width="50" height="50" fill="white" transform="translate(15 15.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        } key={i} />
                    })
                }

            </div>
        </div>
    )
}

export default CardList