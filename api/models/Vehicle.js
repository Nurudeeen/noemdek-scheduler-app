/**
 * Vehicles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string',
      description: 'name of vehicle',
      example: 'Lexus GLS 450'
    },

    description:{
      type: 'string',
      description: 'description of vehicle',
      example: 'Full Size SUV'
    },

    image:{
      type: 'string',
      description: 'image of vehicle',
      example: 'https://cloudinary/image/eiwidshffdllsfd.com',
      defaultsTo: 'test image link'
    },

    condition:{
      type: 'string',
      description: 'condition of vehicle',
      example: 'Great Condition'
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
      via: 'vehicleId'
    },

  },
    customToJSON: function () {
      return _.omit(this, [
        "createdAt",
        "updatedAt"
      ]);
    }
};

