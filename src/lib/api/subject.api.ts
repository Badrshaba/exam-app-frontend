import { getAuthHeader } from "../utils/auth-header";

export async function getSubjects() {
  const response = await fetch(`${process.env.API}/subjects`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<
    PaginatedResponse<{
      subjects: Subject[];
    }>
  > = await response.json();

  return payload;
}
