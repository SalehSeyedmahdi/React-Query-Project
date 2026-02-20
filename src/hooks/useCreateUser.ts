import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers } from "../services/user.service";

export function useCreateUser() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: fetchUsers,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
		},
	});
}
