import styles from "@/styles/Home.module.css"
import ClientsList from "../ClientsList";
import { useEffect, useState } from "react";


export default function Route({ close, url }) {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    fetch(url + '/route').then((response) => response.json()).then((data) => setRoute(data))
  }, []);

  return (
    <div className={styles.absoluteContainerWrapper}>
      <section className={styles.absoluteContainer}>
        <h2 className={styles.title}>Rota</h2>
        <button className={ styles.closeButton } onClick={close}>X</button>
        <ClientsList clients={route} />
      </section>
    </div>
  )
}