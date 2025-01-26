const Joi = require("joi");

const userRegistrationDTO = Joi.object({
  fullName: Joi.string().min(2).max(50).required().messages({
    "string.base": "Full name must be a string",
    "string.empty": "Full name is required",
    "string.min": "Full name must be at least 2 characters long",
    "string.max": "Full name cannot exceed 50 characters",
  }),
  
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "string.empty": "Email is required",
  }),
  
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must be 8-25 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character",
      "string.empty": "Password is required",
    }),
  
  confirmPassword: Joi.string()
    .equal(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Confirm password must match the password",
      "string.empty": "Confirm password is required",
    }),
  
  role: Joi.string()
    .pattern(/^(admin|customer|seller)$/)
    .default("customer")
    .messages({
      "string.pattern.base": "Role must be one of admin, customer, or seller",
    }),
  
  phone: Joi.string()
    .optional(),
  
  address: Joi.string()
    .optional()
    .max(255)
    .messages({
      "string.max": "Address cannot exceed 255 characters",
    }),
});

module.exports = {
  userRegistrationDTO,
};
