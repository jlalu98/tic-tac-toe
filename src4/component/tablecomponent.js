




function MyTable(props) {
    return (
      <table className="myTable">
        <tr>
          <th>Moves:</th>
          <th>Player:</th>
          <th>Cell Position:</th>
        </tr>
        {props.data.map(row => {
          return (
            <tr>
              <td>{row.serialNum} </td>
              <td>{row.next=='X'?row.player1:row.player2}</td>
              <td>{row.position}</td>
            </tr>
          );
        })}
      </table>
    );
  }

  export default MyTable;