module.exports = {


  friendlyName: 'Add vehicle',


  description: '',


  inputs: {
    name: {
      type: 'string',
      description: 'name of vehicle',
      required: true
    },
    description: {
      type: 'string',
      description: 'description of vehicle',
      required: true,
      example: 'Full Size SUV'
    },

    image: {
      type: 'string',
      description: 'image of vehicle',
      example: 'https://cloudinary/image/eiwidshffdllsfd.com'
    },

    condition: {
      type: 'string',
      description: 'condition of vehicle',
      required: true,
      example: 'Great Condition'
    }
  },


  exits: {
    addVehicleFailed: {
      statusCode: 500,
      desription: 'something went wrong'
    }
  },


  fn: async function ({ name, description, image, condition }) {
    let errorResponse, successResponse = {};
    try {
      const newVehicle = await Vehicle.create({ name: name, description: description, image: image, condition: condition }).fetch()
      successResponse = await sails.helpers.successResponse.with({
        message: 'successfully added a vehicle',
        data: newVehicle
      })
      return successResponse
    } catch (error) {
      sails.log('vehicle creation failed: ', error)
      errorResponse = await sails.helpers.errorResponse.with({
        message: 'vehicle addition failed, something went wrong'
      })
      throw { addVehicleFailed: errorResponse }
    }



  }


};
