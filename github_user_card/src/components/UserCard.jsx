

const UserCard = ({ user }) => {
  return (
    <div className="bg-blue-50 bg-opacity-30 flex shadow-lg">
      <img className="h-30 w-30 rounded-full m-8" src={user.img_src} alt="A brilliant programmer, surely." />
      <div className="m-12">
        <a href={user.blog}>
        <h2 className="text-5xl">{user.name}</h2>
        <p className="font-medium text-lg text-right">{user.location}</p>
         </a>
        <p className="border-t-2 border-black">{user.bio}</p>
      </div>
    </div>
  )
}

export default UserCard