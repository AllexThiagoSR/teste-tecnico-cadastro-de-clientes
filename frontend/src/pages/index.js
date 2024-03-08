import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ClientsList from '@/components/ClientsList'
import FilterForm from '@/components/FilterForm';
import { useCallback, useState } from 'react';
import Route from '@/components/Route/index';
import CreationForm from '@/components/CreationForm';

export async function getServerSideProps() {
  const url = (process.env.URL_BASE || 'https://localhost:3001/api/') + 'clients'
  const clients = await fetch(url);
  return {
    props: {
      URL_BASE: url,
      initialClients: await clients.json(),
    }
  }
}

export default function Home({ initialClients, URL_BASE }) {
  const [clients, setClients] = useState(initialClients);
  const [showRoute, setShowRoute] = useState(false);
  const [creationMode, setCreationMode] = useState(false);

  const filterClients = useCallback(async (queries) => {
    const filteredClients = await fetch(URL_BASE + '?' + new URLSearchParams(queries));
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
        <h1 className={ styles.mainTitle }>Clientes</h1>
        <FilterForm filter={filterClients}/>
        <ClientsList clients={ clients }/>
        <div className={ styles.buttonsContainer }>
          <button onClick={ () => { setShowRoute(true); setCreationMode(false) } }>Mostrar melhor rota</button>
          <button onClick={ () => { setShowRoute(false); setCreationMode(true) } }>Criar cliente</button>
        </div>
        {
          showRoute && (<Route close={ () => setShowRoute(false) } url={URL_BASE}/>)
        }
        {
          creationMode && (<CreationForm saveClientInLocal={ setClients } close={ () => setCreationMode(false) } url={URL_BASE}/>)
        }
      </main>
    </>
  )
}
