function AppTable(props) {
  const { person } = props;
  return (
    <table class="table is-bordered mb-3">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{person.name}</td>
          <td>{person.gender}</td>
          <td>{person.age}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default AppTable;
