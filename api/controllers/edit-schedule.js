
module.exports = {


  friendlyName: 'Edit schedule',


  description: '',


  inputs: {
    scheduleId: {
      type: 'string',
      description: 'id of the schedule',
      required: true
    },
    customer: {
      type: 'string',
      description: 'client name',
      example: 'Clinton',
    },

    service: {
      type: 'string',
      description: 'client company',
      example: 'Full Day Rental',
    },

    startDateTime: {
      type: 'string',
      description: 'start date of schedule',
      example: '2021-02-15'
    },

    endDateTime: {
      type: 'string',
      description: "end date of schedule",
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
    pickupAddress: {
      type: 'string',
      description: 'pickup location',
      example: 'Zuma Close, Osborne Phase 1 Estate, Ikoyi'
    },

    dropOffAddress: {
      type: 'string',
      description: 'drop-off location',
      example: 'Zuma Close, Osborne Phase 1 Estate, Ikoyi'
    },

    note: {
      type: 'string',
      description: 'additional note'
    },

    driverId: {
      type: 'string',
      description: 'id of the driver attached to schedule',
      example: '638hdbnaqpo097w'
    },

    vehicleId: {
      type: 'string',
      description: 'id of the driver attached to schedule',
      example: '638hdbnaqpo097w'
    }
  },


  exits: {
    entityDoesNotExist: {
      statusCode: 400,
      description: 'driver or vehicle does not exist'
    }
  },


  fn: async function ({ driverId, vehicleId, scheduleId, ...scheduleData }) {

    let errorResponse, successResponse = {}
    const oldSchedule = await Schedule.findOne({ id: scheduleId })
    if (!oldSchedule) {
      sails.log('schedule edit failed: invalid schedule id detected')
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'schedule does not exist'
      })
      throw { entityDoesNotExist: errorResponse }
    }

    const checkDriver = await Driver.findOne({ id: driverId || oldSchedule.driverId })
    const checkVehicle = await Vehicle.findOne({ id: vehicleId || oldSchedule.vehicleId })

    if (!checkDriver || !checkVehicle) {
      sails.log('schedule edit failed: invalid driver or vehicle id provided')
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'driver or vehicle provided does not exist'
      })
      throw { entityDoesNotExist: errorResponse }
    }

    try {
      const editedSchedule = await Schedule.updateOne({ id: scheduleId }).set({
        driverId: driverId,
        vehicleId: vehicleId,
        ...scheduleData
      })
      successResponse = await sails.helpers.successResponse.with({
        message: 'successfully edited a schedule',
        data: editedSchedule
      })
      return successResponse
    } catch (error) {
      sails.log('schedule edit failed: ', error)
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'something went wrong :('
      })
      throw { entityDoesNotExist: errorResponse }
    }




  }


};
