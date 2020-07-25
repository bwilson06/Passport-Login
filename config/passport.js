var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs')
var db = require("../models")