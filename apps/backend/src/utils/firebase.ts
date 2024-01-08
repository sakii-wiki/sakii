import admin from "firebase-admin"
import account from "../../account.secret.json"

admin.initializeApp({
  credential: admin.credential.cert(account as any),
})
