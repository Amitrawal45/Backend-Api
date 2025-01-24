const Joi = require('joi')

const userRegistrationDOT = Joi.object({
    fullname : Joi.string().min(3).max(50).required(),
    email : Joi.string().email().required(),
    password : Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/).required(),
    confirmPassword : Joi.string().equal([Joi.ref('password')]).required(),
    phone : Joi.string().optional(),
    address: Joi.string().optional(),
    role : Joi.string().regex(/^(admin | customer | seller)$/).default('customer')
    

})

module.exports = {
    userRegistrationDOT,
 
}