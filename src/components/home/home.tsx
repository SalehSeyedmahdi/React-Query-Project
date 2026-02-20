import AddUser from "./addUser";
import Users from "./userList";

function Home() {
	return (
		<div className="w-full h-screen flex flex-col items-center gap-20 p-10">
			<AddUser />
			<Users />
		</div>
	);
}

export default Home;
