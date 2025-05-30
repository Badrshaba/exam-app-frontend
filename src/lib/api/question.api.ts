import { getAuthHeader } from "../utils/auth-header";

export async function getQuestions(searchParams: string) {
  const authHeader = await getAuthHeader();
  const response = await fetch(`${process.env.API}/questions?${searchParams}`, {
    headers: {
      ...authHeader,
    },
  });

  const payload: APIResponse<{ questions: Question[] }> = await response.json();

  return payload;
}
