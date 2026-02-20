import { useQuery } from "@tanstack/react-query";

const USER_API = "https://690c987fa6d92d83e84e66f6.mockapi.io/users";

export async function fetchUsers() {
	const response = await fetch(USER_API);
	return response.json();
}

function Users() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});

	if (isLoading) return "loading";
	if (error) return "Oops!";
}
