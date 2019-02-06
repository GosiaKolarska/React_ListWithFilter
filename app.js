const data = {
  users: [
    {
      id: 1,
      age: 22,
      name: "Maro",
      sex: 'male'
    },
    {
      id: 2,
      age: 25,
      name: "Ela",
      sex: 'female'
    },
    {
      id: 3,
      age: 26,
      name: "Ola",
      sex: 'female'
    },
    {
      id: 4,
      age: 27,
      name: "Karol",
      sex: 'male'
    }
  ]
}

const Item = ({ user }) => (
  <li className="userInfo">
    <h1>{user.name}</h1>
    <p>Wiek użytkownika: <strong>{user.age}</strong></p>
    <p>Płeć użytkownika: <strong>{user.sex}</strong></p>
  </li>
)


class ListItems extends React.Component {
  state = {
    select: "all",

  }

  handleUsersFilter = (option) => {
    this.setState({
      select: option
    })
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case 'all':
        return users.map(user => <Item user={user} key={user.id} />);
      case 'female':
        users = users.filter(user => user.sex === 'female');
        return users.map(user => <Item user={user} key={user.id} />);
      case 'male':
        users = users.filter(user => user.sex === 'male');
        return users.map(user => <Item user={user} key={user.id} />);
      default:
        return "Brak danych"
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, 'all')}>Wszyscy</button>
        <button onClick={this.handleUsersFilter.bind(this, 'female')}>Kobiety</button>
        <button onClick={this.handleUsersFilter.bind(this, 'male')}>Mężczyźni</button>
        <ul>{this.usersList()}</ul>
      </div>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'));