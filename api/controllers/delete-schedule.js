module.exports = {


  friendlyName: 'Delete schedule',


  description: 'Endpoint to delete schedules',


  inputs: {
    scheduleId:{
      type: 'string',
      description: 'id of the schedule to be deleted',
      required: true
    }
  },


  exits: {
    entityDoesNotExist: {
      statusCode: 400,
      description: 'incorrect schedule id provided'
    }
  },


  fn: async function ({scheduleId}) {

    try {
      await Schedule.destroyOne({id: scheduleId})
      successResponse = await sails.helpers.successResponse.with({
        message: 'successfully deleted a schedule'
      })
      return successResponse
    } catch (error) {
      sails.log('schedule delete failed: ', error)
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'something went wrong :('
      })
      throw { entityDoesNotExist: errorResponse }
    }

  }


};
