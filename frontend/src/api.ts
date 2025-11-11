const BASE = "http://localhost:8080";

async function request<T>(url: string, options: RequestInit): Promise<T> {
    const res = await fetch(BASE + url, { headers: { "Content-Type": "application/json" }, ...options });
    if (!res.ok) {
        const body = await res.json().catch(() => ({} as any));
        throw new Error((body as any).message || `HTTP ${res.status}`);
    }
    return (await res.json().catch(() => ({}))) as T;
}

export const api = {
    signup: (data: { username?: string; email: string; password: string; confirmPassword: string }) =>
        request<void>("/api/auth/signup", { method: "POST", body: JSON.stringify(data) }),
    login: (data: { email: string; password: string }) =>
        request<{ token: string }>("/api/auth/login", { method: "POST", body: JSON.stringify(data) }),
    forgot: (data: { email: string }) =>
        request<void>("/api/auth/forgot-password", { method: "POST", body: JSON.stringify(data) }),
    reset: (data: { token: string; newPassword: string; confirmPassword: string }) =>
        request<void>("/api/auth/reset-password", { method: "POST", body: JSON.stringify(data) }),
};
