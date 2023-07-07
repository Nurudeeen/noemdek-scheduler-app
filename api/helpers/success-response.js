module.exports = {


    friendlyName: 'Success response',
  
  
    description: 'Return Success Message',
  
  
    inputs: {
      data:{
        type: 'ref',
        description: 'Information about the success message'
      },
      message:{
        type: 'string',
        description: 'A short description of the message'
      }
    },
  
  
    exits: {
  
      success: {
        description: 'All done.',
      },
  
    },
  
  
    fn: async function (inputs) {
      const response = {
        success: true,
        message: inputs.message || 'Successful'
      };
  
      if(inputs.data) {response.data = inputs.data;}
  
      return response;
    }
  
  
  };
  
  