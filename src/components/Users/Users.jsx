import SingleUser from "./SingleUser";

const Users = ({ UsersList }) => {
  return (
    <>
      <div className="flex relative">
        {UsersList.map((item) => {
          return (
            <SingleUser src={item.src} key={item.id} className={item.className}/>
          )
        })}
      </div>
    </>
  );
};

export default Users;
