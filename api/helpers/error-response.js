module.exports = {


    friendlyName: 'Error response',
  
  
    description: '',
  
  
    inputs: {
      message:{
        type: 'string',
        description: 'A short description of the message'
      },
      error: {
        type: 'ref',
        description: 'Information about the error message'
      }
    },
  
  
    exits: {
  
      success: {
        description: 'All done.',
      },
  
    },
  
  
    fn: async function (inputs) {
      const response = {
        success: false,
        message: inputs.message || 'Oops :) an error occurred'
      };
  
      if(inputs.error){
        response.data = {};
        response.data.errors = inputs.error;
      }
  
      return response;
    }
  
  
  };
  
  