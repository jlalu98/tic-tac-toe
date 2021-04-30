function MyTable(props) {
  return (
    <table className="myTable">
      <thead>
        <tr>
          <th>Move</th>
          <th>Player</th>
          <th>Cell</th>
        </tr>
      </thead>
      {props.data.map(row => {
        return (
          <tbody>
            <tr>
              <td>{row.serialNum} </td>
              <td>{row.next === "X" ? row.player1 : row.player2}</td>
              <td>{row.position}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default MyTable;
