/*
 * MongoDB Controller
 *
 * Description: This script provides access to the MongoDB client from any view through MongooseJS
 *
 * References:
 * https://docs.mongodb.com/manual/
 * http://mongoosejs.com/docs/index.html
 *
 */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import appConfig from '../../config/config';
import 'babel-polyfill';

/**
 * Connect to MongoDB
 */
mongoose.connect(appConfig.mongo_url);

/**
 * Return a connection to the MongoDB client
 *
 * @returns {Promise}
 */
function connectToMongo() {
    return new Promise((resolve,reject) => {
        let conn = mongoose.connection;

        conn.on('error', function(err) {
            reject(new Error(err));
        });

        conn.on('connected', function() {
            resolve(conn);
        });
    });
}

/**
 * Schema for the 'User' model
 */
let userSchema = mongoose.Schema({
    username: {
        type: 'string',
        index: true
    },
    password: {
        type: 'string'
    },
    email: {
        type: 'string'
    },
    name: {
        type: 'string'
    }
});

/**
 * User variable representing the 'User' model
 *
 * @type {*}
 */
let User = mongoose.model('User', userSchema);

/**
 * Returns a hashed password as a Promise
 *
 * @param password
 * @returns {Promise}
 */
function hashPassword(password) {

    return new Promise((resolve, reject) => {

        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                reject(new Error(err));
            }

            bcrypt.hash(password, salt, function(err, hash) {
                if (err) {
                    reject(new Error(err));
                }

                resolve(hash);
            });
        });
    });
}

/**
 * Create a new user in the DB. If user is saved to the User model, will return a Promise with the value equal
 * to the new User
 *
 * Example newUser variable:
 *
 * let newUser = {
 *     name: name,
 *     email: email,
 *     username: username,
 *     password: password
 * };
 *
 * @param newUser
 * @returns {Promise}
 */
export function createUser(newUser) {

    return new Promise((resolve, reject) => {

        hashPassword(newUser.password).then(hash => {

            let userToAdd = new User(newUser);

            userToAdd.password = hash;

            userToAdd.save(function (err, userToAdd) {
                if (err) {
                    reject(new Error(err));
                }

                resolve(userToAdd);
            });

        }).catch(err => {
            console.log(err);
            reject(new Error(err));
        });
    });
}

/**
 * Find an existing user in the Mongo 'User' model and return user document
 * Mongoose API: http://mongoosejs.com/docs/api.html#query_Query-findOne
 *
 * @param username
 * @returns {Promise}
 */
export function getUserByUsername(username) {

    return new Promise((resolve, reject) => {

        let query = User.where({
            username: username
        });

        query.findOne(function (err, user) {
            if (err) {
                reject(err);
            }

            resolve(user);
        });
    });
}

function getUserById(id) {

    return new Promise((resolve, reject) => {
        resolve(User.findById(id));
    });
}

function comparePassword(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}
