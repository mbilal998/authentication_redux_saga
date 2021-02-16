import { auth, db } from "../../../firebase";

const url = "http://localhost:5000/users";

export const saveData = async (data: any) => {
  const user_info = {
    email: data.email,
    password: data.password,
    firstname: data.firstname,
    lastname: data.lastname,
    company: data.company,
    designation: data.designation,
    address: data.address,
  };

  const response = await fetch(url + "/register", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user_info),
  });
  const parseRes = await response.json();

  return parseRes;
};

export const loginData = (data: any) => {
  return auth.signInWithEmailAndPassword(data.email, data.password);
};

export const logOutData = (data: any) => {
  return auth.signOut();
};

export const resetPassword = (data: any) => {
  return auth.sendPasswordResetEmail(data.email);
};

export const updateData = async (data: any) => {
  if (data.email !== data.user.email) {
    data.user.updateEmail(data.email);
  }

  if (data.password) {
    data.user.updatePassword(data.password);
  }

  try {
    await db.collection("users").doc(data.uid).update({
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
};
