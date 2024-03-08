import { useCallback, useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function FilterForm({ filter }) {
  const [form, setForm] = useState({ q: '', email: '', phone: '' });

  useEffect(() => {
    if (form.q.length == 0 && form.email.length == 0 && form.phone.length == 0) {
      filter()
    }
  }, [form]);

  const handleChange = useCallback((e) => {
    const { target: { name, value } } = e;
    setForm((data) => ({ ...data, [name]: value }));
  }, []);
  return (
    <form className={ styles.filterForm }>
      <input type="text" name="q" placeholder="Nome:" value={form.q} onChange={ handleChange }/>
      <input type="text" name="email" placeholder="Email:" value={form.email} onChange={ handleChange }/>
      <input type="tel" name="phone" placeholder="Celular:" value={form.phone} onChange={ handleChange }/>
      <button
        type="button"
        disabled={
          form.q.length == 0 && 
          form.email.length == 0 && 
          form.phone.length == 0
        }
        className={ styles.filterButton }
        onClick={() => filter(form) }
      >Filtrar</button>
    </form>
  );
}