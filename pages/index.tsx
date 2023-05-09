import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import CardList from '@/components/CardsList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Currency Tracker</title>
        <meta name="description" content="Cotacão do dólar e outras moedas internacionais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

      </header>
      <main>
        <section className={styles.hero}>
          <div className={styles.text}>
            <h1>Currency Tracker</h1>
            <p>Cotacão de moedas internacionais para o Real Brasileiro.</p>
          </div>
          <div className={styles.logo}>
            <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3083 25.3082V240.428C25.3083 261.434 42.2649 278.39 63.2707 278.39H278.391" stroke="url(#paint0_linear_0_110)" stroke-width="24.6445" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M63.2705 215.12L121.353 147.294C130.97 136.158 148.053 135.399 158.429 145.902L170.451 157.923C180.827 168.3 197.91 167.667 207.527 156.531L265.736 88.5789" stroke="url(#paint1_linear_0_110)" stroke-width="24.6445" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_0_110" x1="151.849" y1="25.3082" x2="151.849" y2="278.39" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#DD2ACB" />
                  <stop offset="1" stop-color="#2A87DD" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_110" x1="164.503" y1="88.5789" x2="164.503" y2="215.12" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#DD2ACB" />
                  <stop offset="1" stop-color="#2A87DD" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section>
          <CardList />
        </section>

      </main>
      <footer>

      </footer>

    </>
  )
}
