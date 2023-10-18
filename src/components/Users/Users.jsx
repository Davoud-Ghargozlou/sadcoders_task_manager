const Users = ({ UsersList }) => {
  return (
    <>
      <div className="flex relative">
        {UsersList.map((item) => {
          return <img src={item.src} key={item.id} alt="" className={item.className} />;
        })}
      </div>
    </>
  );
};

export default Users;
