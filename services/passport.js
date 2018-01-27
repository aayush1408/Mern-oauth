const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose');
const User = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {

    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({ googleId: profile.id }).save()
                    .then((user) => done(null, user));
            }
        })

})
);

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {

    User.findOne({ facebookId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({ facebookId: profile.id }).save()
                    .then((user) => done(null, user));
            }
        })

})
);
