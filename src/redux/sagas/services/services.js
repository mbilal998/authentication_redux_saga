import { auth, db } from "../../../firebase";

export const saveData = async (data) => {
    const response = await auth.createUserWithEmailAndPassword(data.email, data.password);
    if (response.user.uid) {
        try {
            await db.collection("users").doc(response.user.uid).set({
                firstname: data.firstname,
                lastname: data.lastname,
                company: data.company,
                designation: data.designation,
                address: data.address,
            });
            return data;
        } catch (e) {
            return e.message;
        }
    }
}

export const loginData = (data) => {
    return auth.signInWithEmailAndPassword(data.email, data.password);
}

export const logOutData = (data) => {
    return auth.signOut();
}

export const resetPassword = (data) => {
    return auth.sendPasswordResetEmail(data.email);
}

export const updateData = async (data) => {

    if (data.email !== data.user.email) {
        data.user.updateEmail(data.email);
    }

    if (data.password) {
        data.user.updatePassword(data.password);
    }

    //console.log(data.uid);

    try {
        await db.collection("users").doc(data.uid).update(
            {
                firstname: data.firstname,
                lastname: data.lastname,
                company: data.company,
                designation: data.designation,
                address: data.address,
            }
        );
        return data;
    } catch (e) {
        return e.message;
    }

}
