import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>MedSpaCy Demo</h1>
        <form>
          <div className='text-area'>
            <label for="text">Enter text:</label>
            <textarea id="text" name="text" rows="10" cols="80"></textarea>
          </div>
          <br/>
        <div>
          <label for="file" className='upload-file'>Upload file:</label>
          <input type="file" id="file" name="file"/>
        </div>
          <br/>

          <input type="submit" value="Submit" className='toggle'/>
        </form>
        <div className='buttons'>
          <button onclick="toggleEnt()" className='toggle'>Toggle Entity Visualization</button>
          <button onclick="toggleDep()" className='toggle'>Toggle Dependency Visualization</button>
          <button onclick="toggleDfs()" className='toggle'>Toggle Dataframes Table</button>
        </div>
    </div>
  );
}

export default App;
