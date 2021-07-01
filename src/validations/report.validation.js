const Joi = require('joi');

const createReport = {
  body: {
    concept: Joi.string().required(),
    dateFrom: Joi.date().required(),
    dateTo: Joi.date().required(),
    employeeInformation: Joi.object().required(),
    spending: Joi.array().required(),
    amount: Joi.number().required(),
    approvedBy: Joi.string().required(),
  },
};

const getReport = {
  params: {
    id: Joi.string().required(),
  },
};

const updateReport = {
  body: {
    concept: Joi.string().required(),
    dateFrom: Joi.date().required(),
    dateTo: Joi.date().required(),
    employeeInformation: Joi.object().required(),
    spending: Joi.array().required(),
    amount: Joi.number().required(),
    approvedBy: Joi.string().required(),
  },
};

const deleteReport = {
  params: {
    id: Joi.string(),
  },
};

module.exports = {
  createReport,
  getReport,
  updateReport,
  deleteReport,
};
