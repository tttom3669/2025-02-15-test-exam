function App() {
  const [userData, setUserData] = React.useState([]);
  React.useEffect(() => {
    render();
  }, []);

  const render = async () => {
    const res = await fetch(`https://randomuser.me/api/?results=10`);
    const resJson = await res.json();
    console.log(resJson);
    setUserData(resJson.results);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="row">
        {userData &&
          userData.map((user) => (
            <div className="col-md-4" key={user.email}>
              <div className="bg-light p-3">
                <img
                  src={user.picture.medium}
                  alt="頭像"
                  className="img-fluid rounded-circle"
                />
                <h2 className="mb-0">{user.name.first} {user.name.last}</h2>
                <p className="mb-0">{user.email}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
