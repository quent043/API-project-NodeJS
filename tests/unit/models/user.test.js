const {User} = require('../../../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');

describe('user.generateAuthToken', () => {
  it('should return a valid JWT', () => {
    const payload = {
      /*On doit passer par Mongoose pour créer un ObjectID de type _id
      si on ne le passe pas par la méthode toHexString(), on aura
       un tableau de bytes. Or generateAuthToken créer un _id sous forme
       hexadécimale. On doit donc convertir pour que ça passe.*/
      _id: new mongoose.Types.ObjectId().toHexString(), 
      isAdmin: true 
    };
    //On n'a pas accès au schema, donc on crée un User à partir du Model Mongoose.
    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    expect(decoded).toMatchObject(payload);
  });
});
