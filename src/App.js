import './App.css';

function App() {

  let styles = { color: "teal", fontSize: "32px" }

  return (
    <div className="App">
      <h1>Mobile Operting System</h1>
      {["Android", "Blackberry", "iPhone", "Windows Phone" ].map( (el) =>{
        return <li>{el}</li>
      })}

      <h1>Mobile Manufacturers</h1>
      {["Samsung", "HTC", "Micromax", "Apple"]. map((el) => {
        return <li>{el}</li>
      })}
    </div>
  );
}

export default App;
