import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCaregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson)
            }, 3000);
            
        })
    }, [nomeUsuario])
    return (
        <div className="container">
        {estaCaregando ? (
                    <h1>Carregando...</h1>
        ) : (
            <ul className={styles.list}>
            {/* {repos.map(Repositorio => ( */}
            {repos.map(({ id, name , language, html_url }) => (
                <li className={styles.listItem} key={id}>

                    <div className={styles.ItemName}>
                    <b>Nome</b> 
                    {name} 
                    </div>

                    <div className={styles.ItemLanguage}>
                    <b>Linguagem:</b> 
                    {language} 
                    </div>
                    <a className={styles.ItemLink} target='_blank' href={html_url}>Visitar no Git Hub</a>
                </li>
            ))}
        </ul>
        )}
        </div>
    )
}


export default ReposList;