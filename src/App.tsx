import React, { useState } from 'react';
import { EsportsTitle } from './api/tournamentsApi';
import './App.scss';
import logo from './assets/logo.svg';
import Table from './components/Table';
import Spinner from './Spinner';
import useFetch from './useFetch';

const App = () => {
  const [title, setTitle] = useState<Array<string>>([]);

  const { data, loading } = useFetch(title);

  // console.log('data from home page', data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Destructuring
    const { value, checked } = e.target;

    console.log('we are checking type', typeof value);
    console.log('we are checking value is', value);

    // when checkbox is checked
    if (checked) {
      setTitle((title) => [...title, value]);
    }
    // when checkbox is unchecked
    else {
      setTitle((title) => [...title.filter((e) => e !== value)]);
    }

    // console.log('selected value', e.target.value);
    //  setTitle(e.target.value);
    // setTitle((title) => [...title, e.target.value]);
  };

  // setArray(oldArray => [...oldArray,newValue] );
  return (
    <div className="App">
      <header>
        <h1>Tournament Schedule</h1>
        <img src={logo} className="logo" alt="logo" />
        <button role="button">buy</button>
      </header>
      <div className="container">
        <aside>
          <div className="inputs-caption">Title Selection</div>
          {Object.keys(EsportsTitle).map((title) => {
            const id = `check-${title}`;
            return (
              <div key={title} className="input-item">
                <input
                  id={id}
                  type="checkbox"
                  value={title}
                  onChange={handleChange}
                />
                <label htmlFor={id}>{title}</label>
              </div>
            );
          })}
        </aside>
        <main>
          {/* TODO: Show Tournaments for selected Esports. */}
          {/* TODO: Show a spinner while new tournaments are being loaded */}
          {loading ? <Spinner /> : <Table data={data} />}
        </main>
      </div>
    </div>
  );
};

export default App;
