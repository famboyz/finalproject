var db = require("../models");
var users = [
    {
        id: 1,
        email: "member@member.com",
        password: "member",
        role: "Member"
    },
    {
        id: 2,
        email: "admin@admin.com",
        password: "admin",
        role: "Admin"
    }
];

async function makeData(Model, data) {
    var promises = [];
    for (var i = 0; i < data.length; i++) {
        promises.push(Model.create(data[i]));
    }
    var items = await Promise.all(promises);
    return items;
}
db.sequelize.sync({force:true}).then(async function () {
    await makeData(db.User, users);
    db.sequelize.close();
})