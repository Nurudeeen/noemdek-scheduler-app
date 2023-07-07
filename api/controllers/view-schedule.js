module.exports = {


  friendlyName: 'View schedule',


  description: 'view a single schedule',

  inputs: {
    scheduleId: {
      type: 'string',
      required: true,
      description: 'id of schedule'
    }
  },

  exits: {
    entityNotFound: {
      statusCode: 400
    }

  },


  fn: async function ({ scheduleId }) {
    let errorResponse, successResponse = {}

    try {
      const { driverId: { fullName }, vehicleId: { image, name, type, condition }, ...scheduleData } = await Schedule.findOne({ id: scheduleId }).populate('vehicleId').populate('driverId')

      const payload = {
        vehicleImage: image,
        vehicleName: name,
        vehicleType: type,
        vehicleCondition: condition,
        driverName: fullName,
        ...scheduleData
      }
      successResponse = await sails.helpers.successResponse.with({
        message: 'successfully fetched a schedule',
        data: payload
      })
      return successResponse

    } catch (error) {
      sails.log('schedule fetch failed: ', error)
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'cannot fetch schedule detail :('
      })
      throw { entityNotFound: errorResponse }
    }

  }


};
