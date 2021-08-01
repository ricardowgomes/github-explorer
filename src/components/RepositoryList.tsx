import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
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
            key={repository.name}
            repository={repository} />
        })}
      </ul>

    </section>
  );
}