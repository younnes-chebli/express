import client from "../clients.mjs";

const addUser = async (user) => {
    const { firstName, lastName, email, ip} = user;
    try {
        await client.query("INSERT INTO users (firstname, lastname, email, ip) values ($1, $2, $3, $4)", [firstName, lastName, email, ip]);
    } catch(err) {
        console.log("Failed to insert", err.stack);
    }
}

export default addUser;