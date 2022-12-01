import client from "../clients.mjs";

const getUser = async (id) => {
    try {
        const res = await client.query(`SELECT * FROM users where id = ${id}`);
        return res.rows[0];
    } catch(err) {
        console.log("Failed to select data", err.stack);
    }
}

export default getUser;