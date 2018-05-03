const mongoose =  require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ahmad:ahmad@ds261929.mlab.com:61929/pusherpoll')
.then(()=>console.log('MongoDB Connected'))
.catch(err => console.log(err));