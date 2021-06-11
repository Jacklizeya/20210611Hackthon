const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  });
const db = mongoose.connection;
db.once('open', (_) =>
  console.log('MongoDB is now connected:', process.env.MONGODB_URL)
);
db.on('error', (err) => console.error('MongoDB connection error!', err));
//db.getCollectionNames().toArray().then( (l)  => console.log(l));