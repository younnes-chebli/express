import client from "../clients.mjs";

const getUsers = async () => {
    try {
        const res = await client.query("SELECT * FROM users");
        console.log(res.rows);
    } catch(err) {
        console.log("Failed to select data", err.stack);
    }
}

export default getUsers;