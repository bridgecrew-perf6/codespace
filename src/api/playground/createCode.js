import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../utility/firebase-service";

export default function createCode(uid) {
    console.log(uid);
    return new Promise(async (res) => {
        const codeRef = collection(db, 'codes');
        let docRef  = await addDoc(codeRef,{ 
            html:"",
            js:"",
            css:"",
            title:"Untitled",
            uid ,
            createdAt:Date.now(),
            updatedAt:Date.now()
        });
        res(docRef);
    })
}