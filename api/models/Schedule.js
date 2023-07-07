/**
 * Schedule.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    customer:{
      type: 'string',
      description: 'client name',
      example: 'Clinton'
    },
    
    service: {
      type: 'string',
      description: 'client company',
      example: 'Full Day Rental'
    },

    startDateTime: {
      type: 'string',
      description: 'start date of schedule',
      columnType: 'datetime',
      example: '2021-02-15'
    },

    endDateTime: {
      type: 'string',
      description: "end date of schedule",
      columnType: 'datetime',
      example: '2021-02-15'
    },

    startTime: {
      type: 'string',
      description: 'time of starting the schedule',
      example: '6:00AM'
    },

    endTime: {
      type: 'string',
      description: 'time of ending the schedule',
      example: '7:00PM'
    },
    pickupAddress:{
      type: 'string',
      description: 'pickup location',
      example: 'Zuma Close, Osborne Phase 1 Estate, Ikoyi'
    },

    dropOffAddress:{
      type: 'string',
      description: 'drop-off location',
      example: 'Zuma Close, Osborne Phase 1 Estate, Ikoyi'
    },

    note:{
      type: 'string',
      description: 'additional note'
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
    vehicleId: {
      model: 'vehicle',
    },

    driverId: {
      model: 'driver',
    },

  },

};

