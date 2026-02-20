import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/user.service";

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
		queryFn: getUsers,
	});
	return { isLoading, userList, error: error ? "fail to fetch" : "" };
}
