const app = require('./app.js').app;
const passport = require('./passport').passport;
const users = require('./user.js');
let db = require('./db.js');

app.post('/signup', (req, res) => {
    users.createUser(req.body, (err, userobj) => {
        if (err) {
            console.log(err);
            res.end(JSON.stringify({ error: err }));
            return;
        } else {
            console.log(
                'account successfully created: ' + JSON.stringify(userobj)
            );
            res.end(JSON.stringify({ login: true }));
        }
    });
});

app.post(
    '/login',
    passport.authenticate('local', {
        session: false,
        failureRedirect: '/loginfail'
    }),
    (req, res) => {
        console.log(res);
        res.end(JSON.stringify({ login: true }));
    }
);
app.post('/coords', (req, res) => {
    db.locations.insertOne(
        { long: req.body.long, latt: req.body.latt },
        { safe: true },
        (err, sum) => {
            if (err) {
                res.end(JSON.stringify({ error: err }));
            }
            //the client has to hit refresh to update the points if you want to change that do it here
            res.end(JSON.stringify({}));
        }
    );
});
app.get('/loginfail', (req, res) => {
    console.log(res);
    res.end(JSON.stringify({ error: res.locals.error }));
});

app.get('/api', (req, res) => {
    db.users.find({ email: req.query.email }).toArray((err, user) => {
        if (err) {
            res.end(err);
        } else if (user[0]) {
            res.end(JSON.stringify(user[0]));
        } else {
            res.end(JSON.stringify({ error: 'no data' }));
        }
    });
});

app.get('/api_location', (req, res) => {
    db.locations.find().toArray((err, locations) => {
        if (err) {
            res.end(JSON.stringify({ error: 'database error' }));
        } else {
            res.end(JSON.stringify(locations));
        }
    });
});
