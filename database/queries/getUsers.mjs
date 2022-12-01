import client from "../clients.mjs";

const getUsers = async () => {
    try {
        const res = await client.query("SELECT * FROM users");
        return res.rows;
    } catch(err) {
        console.log("Failed to select data", err.stack);
    }
}

export default getUsers;