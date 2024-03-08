import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ClientsList from '@/components/ClientsList'
import { Client } from '@/types/Client';

export async function getServerSideProps() {
  const clients = await fetch((process.env.URL_BASE || 'http://localhost:3001/api/') + 'clients');
  return {
    props: {
      URL_BASE: process.env.URL_BASE,
      clients: await clients.json(),
    }
  }
}

type Props = {
  URL_BASE: string;
  clients: Client[];
}

export default function Home({ clients }: Props) {
  return (
    <>
      <Head>
        <title>Clients</title>
        <meta name="description" content="Page to see and add clients" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Clientes</h1>
        <ClientsList clients={ clients }/>
      </main>
    </>
  )
}
