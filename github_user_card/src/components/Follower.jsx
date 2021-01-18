
const Followers = ({ users }) => {
  return (
    <a href={users.html_url}>
      <div className="bg-red-100 bg-opacity-50 shadow rounded-full flex m-3 w-80">
        <img className="h-20 w-20 rounded-full" src={users.avatar_url} alt="a programmer of some importance." />
        <div className="m-3">
          <h2 className="text-2xl">{users.login}</h2>
          <h3>current projects</h3>
        </div>
      </div>
    </a>
  )
}

export default Followers