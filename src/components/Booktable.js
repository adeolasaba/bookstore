import React from 'react'
import Table from 'react-bootstrap/Table'

  function Booktable() {
    return (
        <div>
         <Table striped bordered hover>
  <thead>
    <tr className="table-active">
      <th>#</th>
      <th>author</th>
      <th>title</th>
      <th>serialNo</th>
      <th>PublicationDate</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-success">
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr className="table-info">
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
    </tr>
    <tr className="table-dark">
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
    </tr>
    <tr className="table-warning">
      <td>4</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
    </tr>
    <tr></tr>
  </tbody>
</Table>
   
        </div>
    )
}

export default Booktable;
