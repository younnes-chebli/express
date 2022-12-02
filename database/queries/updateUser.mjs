import client from "../clients.mjs";

const updateUser = async (userID, firstName, lastName, email, ip) => {
    try {
        await client.query(`UPDATE users SET firstname = '${firstName}', lastname = '${lastName}', email = '${email}', ip = '${ip}' WHERE id = ${userID};`);
    } catch(err) {
        console.log("Failed to update data", err.stack);
    }
}

export default updateUser;