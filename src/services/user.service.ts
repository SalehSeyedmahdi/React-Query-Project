import axios from "axios";

const USER_API = "https://690c987fa6d92d83e84e66f6.mockapi.io/users";

export type User = {
	id: string;
	username: string;
};

export async function getUsers() {
	const res = await axios.get(USER_API);
	return res.data;
}

export async function createUser(newUser: User) {
	const res = await axios.post(USER_API, newUser);
	return res.data;
}

export async function deleteUser(id: string) {
	const res = await axios.delete(`${USER_API}/${id}`);
	return res.data;
}
