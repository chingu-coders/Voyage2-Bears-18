print('Enter your server-side credentials')

with open ('./server/credentials/server.js', "w+") as f:
    f.write("module.exports = {\n")
    f.write("  type: '"  + input('type: '))
    f.write("',\n  project_id: '" + input('project id: '))
    f.write("',\n  private_key_id: '" + input('private key id: '))
    f.write("',\n  private_key: '" + input('private key: '))
    f.write("',\n  client_email: '" + input('client email: '))
    f.write("',\n  client_id: '" + input('client id: '))
    f.write("',\n  auth_uri: '" + input('auth uri: '))
    f.write("',\n  token_uri: '" + input('token uri: '))
    f.write("',\n  auth_provider_x509_cert_url: '" + input('auth_provider_x509_cert_url: '))
    f.write("',\n  client_x509_cert_url: '" + input('client_x509_cert_url: '))
    f.write("',\n};\n")
f.close

print('File created in ./server/credentials/')

    