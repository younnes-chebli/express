import client from "../clients.mjs";

const deleteUser = async (id) => {
    try {
        await client.query(`DELETE FROM users WHERE id = ${id}`);
    } catch(err) {
        console.log("Failed to delete data", err.stack);
    }
}

export default deleteUser;