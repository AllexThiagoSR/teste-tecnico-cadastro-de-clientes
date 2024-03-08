import styles from "@/styles/Home.module.css";
import { useState, useCallback } from "react";

export default function CreationForm({ close, saveClientInLocal, url }) {
  const [formClient, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    x: 0,
    y: 0,
  });
  const [error, setError] = useState(<></>);

  const createClient = async (e) => {
    e.preventDefault();
    const response = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formClient),
      }
    );
    if (response.status !== 201) {
      const err = await response.text();
      setError(<div dangerouslySetInnerHTML={ { __html: err }}></div>)
      return;
    }
    const client = await response.json();
    saveClientInLocal((clients) => [...clients, client]);
    setForm({ name: '', email: '', phone: '', x: '', y: '' });
    setError(<></>);
    close();
  };

  const handleChange = useCallback((e) => {
    const { target: { name, value } } = e;
    setForm((data) => ({ ...data, [name]: value }));
  });

  return (
    <div className={styles.absoluteContainerWrapper}>
      <section className={styles.absoluteContainer}>
        <h2 className={styles.title}>Cadastrar Cliente</h2>
        <button className={ styles.closeButton } onClick={close}>X</button>
        <form className={ styles.creationForm} onSubmit={ createClient }>
          <label>
            Nome: <input type="text" name="name" value={formClient.name} onChange={ handleChange }/>
          </label>
          <label>
            Email: <input type="email" name="email" value={formClient.email} onChange={ handleChange }/>
          </label>
          <label>
            Número de Celular: <input type="tel" name="phone" value={formClient.phone} onChange={ handleChange }/>
          </label>
          <label>
            Coordenada X: <input type="number" name="x" value={formClient.x} onChange={handleChange}/>
          </label>
          <label>
            Coordenada Y: <input type="number" name="y" value={formClient.y} onChange={handleChange}/>
          </label>
          <label className={ styles.buttonLabel}>
            <button type="submit">Criar</button>
          </label>
        </form>
        { error }
      </section>
    </div>
  );
}
