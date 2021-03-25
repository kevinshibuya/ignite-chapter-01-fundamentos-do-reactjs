export function RepositoryItem(props) {
  return (
    <li className="repository-container">
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description ?? 'no description found'}</p>

      <a href={props.repository?.html_url}>
        Clique aqui para acessar
      </a>
    </li>
  );
}