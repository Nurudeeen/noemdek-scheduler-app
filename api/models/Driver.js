/**
 * Driver.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {
    fullName:{
      type: 'string',
      description: 'name of driver',
      example: 'Wisdom Ademola'
    },

    email:{
      type: 'string',
      description: 'email of driver',
      example: 'wisdomademola@gmail.com'
    },

    avatar:{
      type: 'string',
      description: 'profile pic link of driver',
      example: 'https://cloudinary/image/eiwidshffdllsfd.com',
      defaultsTo: 'test image link'
    },

    experience:{
      type: 'number',
      description: 'number of years of experience of driver',
      defaultsTo: 1,
      example: 8
    },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    schedules: {
      collection: 'Schedule',
      via: 'driverId'
    }
  },
  customToJSON: function () {
    return _.omit(this, [
      "createdAt",
      "updatedAt"
    ]);
  },
};

