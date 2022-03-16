import { collection, query, where,getDocs } from "firebase/firestore"; 
import { db } from "../../utility/firebase-service";

export default function getAllCodes(uid) {
    return new Promise(async (res) => {
        const codeRef = collection(db, 'codes');
        let q = query(codeRef,where("uid","==",uid));
        let snapshot = await getDocs(q);
        res(snapshot);
    })
}