const app = require('express').app;
const passport = require('../authentication/passport').passport;
const users = require('./user.js');

app.post('/signup', (req, res) => {
    users.createUser(req.body, (err, userobj) => {
        if (err) {
            console.log(err);
            res.locals.error = err;
            res.redirect('/signupfail');
            return;
        } else {
            console.log(
                'account successfully created: ' +
                    userobj.username +
                    '   ' +
                    userobj.password
            );
            res.end(JSON.stringify({ login: true }));
        }
    });
});
app.get('/signupfail', (req, res) => {
    res.end(JSON.stringify({ error: res.locals.error }));
});

app.post(
    '/login',
    passport.authenticate('local', {
        session: false,
        failureRedirect: '/loginfail'
    }),
    (req, res) => {
        res.end(JSON.stringify({ login: true }));
    }
);
app.get('/loginfail', (req, res) => {
    res.end(JSON.stringify({ error: res.locals.error }));
});

app.get(
    '/api',
    passport.authenticate('local', {
        session: false,
        failureRedirect: '/login'
    }),
    (req, res) => {
        db.users.find({ email: req.user.email }).toArray((err, user) => {
            if (err) {
                res.end(err);
            } else if (user[0]) {
                res.end(JSON.stringify(user[0]));
            } else {
                res.end(JSON.stringify({ error: 'no data' }));
            }
        });
    }
);

app.get('/api_location', (req, res) => {
    db.locations.find().toArray((err, locations) => {
        if (err) {
            res.end(JSON.stringify({ error: 'database error' }));
        } else {
            res.end(JSON.stringify(locations));
        }
    });
});
