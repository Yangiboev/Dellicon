var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
  username:String,
  // email: String,
  password:String
});
//
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);
// var UserSchema = new mongoose.Schema({
//   username:{
//     type: String
//     , required: true
//     , validate: [ validators.notEmpty, "Name is empty"]
//   },
//   email: {
//       type: String
//     , required: true
//     , validate: [
//         { validator: validators.notEmpty, msg: 'Email is empty' }
//       , { validator: validators.isEmail, msg: 'Invalid email' }
//       ]
//     }
//     , salt: String
//     , hash: String
// });

// CustomerSchema.virtual('password')
// .get(function() {
//   return this._password;
// })
// .set(function(value) {
//   this._password = value;
//   var salt = bcrypt.gen_salt_sync(12);
//   this.passwordHash = bcrypt.encrypt_sync(value, salt);
// });
//
// CustomerSchema.virtual('passwordConfirmation')
// .get(function() {
//   return this._passwordConfirmation;
// })
// .set(function(value) {
//   this._passwordConfirmation = value;
// });
//
// CustomerSchema.path('passwordHash').validate(function(v) {
//   if (this._password || this._passwordConfirmation) {
//     if (!val.check(this._password).min(6)) {
//       this.invalidate('password', 'must be at least 6 characters.');
//     }
//     if (this._password !== this._passwordConfirmation) {
//       this.invalidate('passwordConfirmation', 'must match confirmation.');
//     }
//   }
//
//   if (this.isNew && !this._password) {
//     this.invalidate('password', 'required');
//   }
// }, null);
//
// CustomerSchema.path('firstName').validate(function(v) {
//   if (!val.check(v).max(100)) {
//     this.invalidate('firstName', 'must be less than 100 characters');
//   }
// }, null);
//
// CustomerSchema.path('lastName').validate(function(v) {
//   if (!val.check(v).max(100)) {
//     this.invalidate('lastName', 'must be less than 100 characters');
//   }
// }, null);
//
// CustomerSchema.path('emailAddress').validate(function(v) {
//   if (!val.check(v).isEmail()) {
//     this.invalidate('emailAddress', 'must be a valid email address');
//   }
// }, null);
