import axios from "axios";

export const axInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
    headers: {
        Authentication: `Bearer ${JSON.parse(
            localStorage.getItem("tokens") as string
        ).access_token}`,
    },
});
