print('Enter your client-side credentials:')

with open('./server/credentials/client.js', 'w+') as f:
    f.write("const fb = require('firebase');\n\n")
    f.write("const config = {\n")
    f.write("  apiKey: '" + input("apiKey: "))
    f.write("',\n  authDomain: '" + input('authDomain: '))
    f.write("',\n  databaseURL: '" + input('databaseURL: '))
    f.write("',\n  projectId: '" + input('projectId: '))
    f.write("',\n  storageBucket: '" + input('storageBucket:' ))
    f.write("',\n  messagingSenderId: '" + input('messagingSenderId: '))
    f.write("',\n};\n\n")
    f.write("""const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();\nmodule.exports = {\n  firebase,\n};\n""")
f.close

print('File created in ./server/credentials/')
