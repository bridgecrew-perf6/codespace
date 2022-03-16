import { doc, updateDoc } from "firebase/firestore"; 
import { db } from "../../utility/firebase-service";

export default function saveCode(codeID,code) {
    console.log(code);
    return new Promise(async (res) => {
        const codeRef = doc(db, 'codes',codeID);
        await updateDoc(codeRef,{ 
            ...code,
            updatedAt:Date.now()
        });
        res();
    })
}