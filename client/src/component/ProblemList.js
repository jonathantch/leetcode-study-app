import React from 'react';

class ProblemList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
            <th>Level</th>
            <th>Date Received</th>
            <th>Date Completed</th>
            <th>Finished</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title1</td>
            <td>link1</td>
            <td>easy</td>
            <td>2019-08-12</td>
            <td>-</td>
            <td>X</td>
            <td>some notes</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default ProblemList;