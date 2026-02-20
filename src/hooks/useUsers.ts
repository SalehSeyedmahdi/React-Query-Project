import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/user.service";

type User = {
	id: string;
	username: string;
};

export function useUsers() {
	const {
		data: userList = [],
		isLoading,
		error,
	} = useQuery<User[], Error>({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});
	return { isLoading, userList, error: error ? "fail to fetch" : "" };
}
