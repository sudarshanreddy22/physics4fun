# Physics4Fun secure administrator activation

1. Register your intended admin email through the website.
2. Firebase Console > Authentication > Users: copy that account's UID.
3. On a private computer with Node.js, run `npm install firebase-admin`.
4. Download a service-account key from Firebase Console > Project settings > Service accounts, storing it only on your private computer. NEVER commit the key to GitHub or upload it to the public website.
5. In the same private directory create `grant-admin.cjs`:

```js
const admin=require('firebase-admin');
const serviceAccount=require('./serviceAccountKey.json');
admin.initializeApp({credential:admin.credential.cert(serviceAccount)});
const uid=process.argv[2];
if(!uid) throw Error('Provide the Firebase user UID');
admin.auth().setCustomUserClaims(uid,{admin:true}).then(()=>console.log('Admin enabled; sign out and back in.')).catch(console.error);
```

6. Run `node grant-admin.cjs YOUR_UID` privately. Sign out and sign back in to refresh the Firebase token.
7. Copy the repository `firestore.rules` into Firebase Console > Firestore Database > Rules and click Publish. Committing rules to GitHub does not deploy them.
8. Visit `https://physics4fun.in/admin.html`.

The dashboard supports teacher approval, user enable/disable, board/grade assignment and admin-only content metadata management for CBSE, ICSE and State Board. Content links are NOT automatically inserted into static `topics.html`. The topics page remains public. No teacher authoring or file uploads are implemented yet.