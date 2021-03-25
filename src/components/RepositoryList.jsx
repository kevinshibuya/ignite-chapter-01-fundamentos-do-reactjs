import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: "Xcard",
  description: "Amazing credit card for everyone",
  link: "http://localhost:8080/"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}