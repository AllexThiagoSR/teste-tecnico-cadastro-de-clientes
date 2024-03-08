import { Client } from "@/types/Client";
import styles from "@/styles/Home.module.css";

export default function ClientsList({ clients }: { clients: Client[] }) {
  return (
    <ul className={ styles.list }>
      {
        clients.map((c) => (
          <li className={ styles.card } key={ `client-${c.id}` }>
            <div>
              <p><b>Nome:</b> { c.name }</p>
              <p><b>Email:</b> { c.email }</p>
              <p><b>Celular:</b> { c.phone }</p>
            </div>
            <div>
              <p><b>Localização</b></p>
              <p>- Coordenada X: { c.x }</p>
              <p>- Coordenada Y: { c.y }</p>
            </div>
          </li>
        ))
      }
    </ul>
  );
}