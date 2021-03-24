export function RepositoryItem(props) {
  return (
    <li className="repository-container">
      <strong>{props.repository?.name ?? "Default"}</strong>
      <p>{props.repository?.description ?? "Default"}</p>

      <a href={props.repository?.link ?? "#"}>
        Clique aqui para acessar
      </a>
    </li>
  );
}