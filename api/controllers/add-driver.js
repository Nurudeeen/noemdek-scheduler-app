module.exports = {


  friendlyName: 'Add driver',


  description: '',


  inputs: {
    fullName:{
      type: 'string',
      description: 'name of driver',
      example: 'Wisdom Ademola',
      required: true
    },

    email:{
      type: 'string',
      description: 'email of driver',
      example: 'wisdomademola@gmail.com',
      required: true
    },

    avatar:{
      type: 'string',
      description: 'profile pic link of driver',
      example: 'https://cloudinary/image/eiwidshffdllsfd.com'
    },

    experience:{
      type: 'number',
      description: 'number of years of experience of driver',
      example: 8
    },
  },


  exits: {
    addDriverFailed: {
      statusCode: 500,
      desription: 'something went wrong'
    }
  },


  fn: async function ({fullName, email, avatar, experience}) {

    let errorResponse, successResponse = {};
    try {
      const newDriver = await Driver.create({ fullName: fullName, email: email, avatar: avatar, experience: experience }).fetch()
      successResponse = await sails.helpers.successResponse.with({
        message: 'successfully added a driver',
        data: newDriver
      })
      return successResponse
    } catch (error) {
      sails.log('driver creation failed: ', error)
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'driver addition failed, something went wrong'
      })
      throw { addDriverFailed: errorResponse }
    }
  }


};
