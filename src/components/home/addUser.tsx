import { useState, type FormEvent } from "react";
import { useCreateUser } from "../../hooks/useCreateUser";

function AddUser() {
	const [username, setName] = useState("");
	const { isPending, mutate } = useCreateUser();
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (username.trim()) {
			mutate({ username } as any);
			setName("");
		}
	};
	return (
		<div className="flex justify-center items-center gap-3">
			<input
				type="text"
				value={username}
				onChange={(e) => setName(e.target.value)}
				className="border border-gray-400 rounded-sm p-3 outline-none"
			/>
			<button
				className="font-semibold text-white bg-blue-600 cursor-pointer hover:bg-blue-300 rounded-sm p-3"
				onClick={handleSubmit}
				disabled={isPending}
			>
				Add To List
			</button>
		</div>
	);
}

export default AddUser;
