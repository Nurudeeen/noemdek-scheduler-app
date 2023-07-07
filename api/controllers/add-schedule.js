
module.exports = {


  friendlyName: 'Create schedule',


  description: '',


  inputs: {
    customer:{
      type: 'string',
      description: 'client name',
      example: 'Clinton',
      required: true
    },
    
    service: {
      type: 'string',
      description: 'client company',
      example: 'Full Day Rental',
      required: true
    },

    startDateTime: {
      type: 'string',
      description: 'start date of schedule',
      required: true,
      example: '2021-02-15'
    },

    endDateTime: {
      type: 'string',
      description: "end date of schedule",
      required: true,
      example: '2021-02-15'
    },

    startTime: {
      type: 'string',
      description: 'time of starting the schedule',
      required: true,
      example: '6:00AM'
    },

    endTime: {
      type: 'string',
      description: 'time of ending the schedule',
      required: true,
      example: '7:00PM'
    },
    pickupAddress:{
      type: 'string',
      description: 'pickup location',
      required: true,
      example: 'Zuma Close, Osborne Phase 1 Estate, Ikoyi'
    },

    dropOffAddress:{
      type: 'string',
      description: 'drop-off location',
      required: true,
      example: 'Zuma Close, Osborne Phase 1 Estate, Ikoyi'
    },

    note:{
      type: 'string',
      description: 'additional note'
    },

    driverId:{
      type: 'string',
      description: 'id of the driver attached to schedule',
      example: '638hdbnaqpo097w'
    },

    vehicleId:{
      type: 'string',
      description: 'id of the driver attached to schedule',
      example: '638hdbnaqpo097w'
    }
  },


  exits: {
    entityDoesNotExist:{
      statusCode: 400,
      description: 'driver or vehicle does not exist'
    }
  },


  fn: async function ({...scheduleData}) {
    let errorResponse, successResponse = {}

    const checkDriver = await Driver.count({id: scheduleData.riverId})
    const checkVehicle = await Vehicle.count({id: scheduleData.vehicleId})
  
    if (!checkDriver || !checkVehicle){
      sails.log('schedule creation failed: invalid driver or vehicle id provided')
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'driver or vehicle provided does not exist'
      })
      throw { entityDoesNotExist: errorResponse }
    }

    try {
      const newSchedule = await Schedule.create({...scheduleData}).fetch()
      successResponse = await sails.helpers.successResponse.with({
        message: 'successfully added a schedule',
        data: newSchedule
      })
      return successResponse
    } catch (error) {
      sails.log('schedule creation failed: ', error)
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'something went wrong :('
      })
      throw { entityDoesNotExist: errorResponse }
    }

  }


};
