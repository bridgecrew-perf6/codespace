import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../utility/firebase-service";

export default function deleteCodeByID(codeID) {
    return new Promise((res, rej) => {
        const codeRef = doc(db, "codes", codeID);
        deleteDoc(codeRef)
            .then(() => {
                res();
            })
            .catch((error) => {
                rej(error);
            });
    });
}
