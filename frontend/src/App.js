import logo from './logo.svg';
import './App.css';


function App() {

  const list = [
    {
      "id": 1,
      "title": "1st todo",
      "body": "Learn Django properly."
    },
    {
      "id": 2,
      "title": "Second item",
      "body": "Learn Python."
    },
    {
      "id": 3,
      "title": "Learn HTTP",
      "body": "It's important."
    }
  ]

  return (
    <div>
      {list.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
