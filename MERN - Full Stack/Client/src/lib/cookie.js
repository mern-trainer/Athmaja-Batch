import { jwtDecode } from "jwt-decode"

const key = "access_token"

export const cookie = {
    set: (token) => {
        const decoded = jwtDecode(token);
        const expire = new Date(decoded.exp * 1000).toUTCString();
        document.cookie = `${key}=${token}; expires=${expire};`;
    }
}