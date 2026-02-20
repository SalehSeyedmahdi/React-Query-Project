import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/user.service";

function useDeleteUser() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => deleteUser(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
		},
	});
}

export default useDeleteUser;
