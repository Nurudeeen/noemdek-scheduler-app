module.exports = {


  friendlyName: 'Fetch schedules',


  description: 'Fetch schedules based on set criterias',


  inputs: {
    fromDate: {
      type: 'string',
      description: 'start date of query',
      required: true
    },
    toDate: {
      type: 'string',
      description: 'end date of query, only provided for weekly/monthly type of request'
    }
  },


  exits: {
    serverError: {
      statusCode: 500,
      description: 'error fetching schedules'
    },
    badRequest: {
      statusCode: 400,
      description: 'invalid parameter/s provided'
    }
  },


  fn: async function ({ fromDate, toDate}) {

    let errorResponse; let successResponse; let queryParams = {}

    if (!toDate) {
      let nextDay = new Date(fromDate).getTime() + 60 * 60 * 24 * 1000
      sails.log(new Date(nextDay), new Date(fromDate) )
      queryParams = { createdAt: { '>': new Date(fromDate), '<': new Date(nextDay) } }
    } else {
      queryParams = {
        createdAt: { '>': new Date(fromDate), '<': new Date(toDate) }
      }
    }

    try {
      const data = await Schedule.find(queryParams)
        .populate('driverId')
        .populate('vehicleId')
        .select(['driverId', 'vehicleId', 'customer', 'service', 'startDateTime', 'endDateTime'])

      successResponse = await sails.helpers.successResponse.with({
        message: 'successfull',
        data: data
      })
      return successResponse

    } catch (error) {
      sails.log('schedule fetch error: ', error)
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'something went wrong :('
      })
      throw { serverError: errorResponse }
    }



  }


};
