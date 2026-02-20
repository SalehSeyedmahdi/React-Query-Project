import useDeleteUser from "../../hooks/useDeleteUser";
import { useUsers } from "../../hooks/useUsers";

function Users() {
	const { isLoading, userList, error } = useUsers();
	const { mutate } = useDeleteUser();

	if (isLoading) {
		return (
			<div className="w-full flex justify-center items-center">
				<div className="flex flex-row gap-2">
					<div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
					<div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
					<div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
				</div>
			</div>
		);
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<ul className="flex flex-col gap-4 list">
			{userList.map((user) => (
				<div className="font-semibold text-lg user">
					<li key={user.id} className="flex justify-center items-center gap-3">
						{user.id}-{user.username}
						<button
							className="text-white text-sm bg-red-600 rounded-md cursor-pointer p-2 hover:bg-red-400"
							onClick={() => mutate(user.id)}
						>
							Delete
						</button>
					</li>
				</div>
			))}
		</ul>
	);
}

export default Users;
