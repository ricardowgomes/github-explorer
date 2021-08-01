import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';
import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []); // Segundo argumento define qual variável que muda para a função executar, se vazio, vai executar uma unica vez, SE O SEGUNDO ARGUMENTO NAO FOR PASSADO, A FUNÇÃO EXECUTA NUM LOOP INFINITO;

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem
            key={repository.id}
            repository={repository} />
        })}
      </ul>

    </section>
  );
}