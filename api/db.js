const mongoose = require('mongoose');
const db_name = process.env['DATABASE_NAME'];
const host = process.env['CONNECTION_INFO'];
const connection = 'mongodb://' + host + '/' + db_name;

console.log('connection --> ', connection);

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })