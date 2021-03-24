import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Xcard",
  description: "Amazing credit card for everyone",
  link: "http://localhost:8080/"
}

export function RepositoryList() {
  return (
    <section>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}