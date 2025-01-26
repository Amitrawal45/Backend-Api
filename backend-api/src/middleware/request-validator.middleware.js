const bodyValidator = (schema) => {
    return async (req, res, next) => {
      try {
        const data = req.body;
        const response = await schema.validateAsync(data,{
          abortEarly: false,
        })
        console.log(response); 
        next(); 
      } catch (exception) {
        const msgs = {};
        if (exception.details) {
          exception.details.forEach((errorObj) => {
            msgs[errorObj.context.label] = errorObj.message;
          });
        }
  
        next({
          code: 400,
          details: msgs,
          message: "Validation error",
          status: "BAD_REQUEST",
        });
  
        console.error(exception); 
      }
    };
  };
  
  module.exports = {
    bodyValidator,
  };
  