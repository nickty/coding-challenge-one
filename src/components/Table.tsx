import React from 'react';
const LOL = require('../assets/lol.png');
const DOTA2 = require('../assets/dota2.png');
const CSGO = require('../assets/csgo.png');

const Table = ({ data }: any) => {
  return (
    <div>
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Tournament</th>
          <th>Organizer</th>
          <th>Tier</th>
          <th>Start Date & Time</th>
          <th>End Date & Time</th>
        </tr>
        {data?.map((val: any, key: any) => {
          return (
            <tr key={key}>
              <td>
                {val.title == 'LOL' ? <img src={LOL} /> : ''}
                {val.title == 'DOTA2' ? <img src={DOTA2} /> : ''}
                {val.title == 'CSGO' ? <img src={CSGO} /> : ''}
              </td>
              <td>{val.name}</td>
              <td>{val.organizer}</td>
              <td>{val.tier}</td>
              <td>{val.start}</td>
              <td>{val.end}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
