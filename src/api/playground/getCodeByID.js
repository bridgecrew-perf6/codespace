import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../../utility/firebase-service";

export default function getCodeByID(codeID) {
    return new Promise(async (res) => {
        const codeRef = doc(db, 'codes',codeID);
        let docRef = await getDoc(codeRef);
        res(docRef);
    })
}