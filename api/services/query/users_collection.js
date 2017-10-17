export const queryFindEmail = async (db, targetEmail) => await db.collection("users").findOne({"email": targetEmail});

export const queryInsertUser = async (db, body) => {
    const {name, age, password, email} = body;

    return await db.collection("users").insert({
        name, age, password, email
    });
};