import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ClientsList from '@/components/ClientsList'
import FilterForm from '@/components/FilterForm';
import { useCallback, useState } from 'react';

export async function getServerSideProps() {
  const clients = await fetch((process.env.URL_BASE || 'https://localhost:3001/api/') + 'clients');
  return {
    props: {
      URL_BASE: process.env.URL_BASE + 'clients?',
      initialClients: await clients.json(),
    }
  }
}

export default function Home({ initialClients, URL_BASE }) {
  const [clients, setClients] = useState(initialClients);

  const filterClients = useCallback(async (queries) => {
    const filteredClients = await fetch(URL_BASE + new URLSearchParams(queries));
    console.log('Rodei');
    setClients(await filteredClients.json())
  }, [URL_BASE]);

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
        <FilterForm filter={filterClients}/>
        <ClientsList clients={ clients }/>
        <button onClick={ () => filterClients() }>Teste</button>
      </main>
    </>
  )
}
