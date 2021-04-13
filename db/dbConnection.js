const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/northwind', { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log("Veri tabanına bağlanıldı"))
    .catch(hata => console.log("Bağlantı hatası"));
