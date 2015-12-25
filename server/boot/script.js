module.exports = function (app) {
    var User = app.models.User;

    User.create([
        {
            username: 'tobias',
            email: 'to@gew.io',
            password: 'admin'
        }
    ], function (err, users) {
        if (err) return console.debug('%j', err);

        // Create projects, assign project owners and project team members

        // Create the admin role
        //Role.create({
        //    name: 'admin'
        //}, function (err, role) {
        //    if (err) return console.debug(err);
        //    console.debug(role);
        //
        //    // Make Bob an admin
        //    role.principals.create({
        //        principalType: RoleMapping.USER,
        //        principalId: users[2].id
        //    }, function (err, principal) {
        //        if (err) return console.debug(err);
        //        console.debug(principal);
        //    });
        //});
    });

};