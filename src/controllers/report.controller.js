const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const Report = require('../models/Report.model');

const expenseReport = catchAsync(async (req, res) => {
  const { body } = req;

  const save = await Report.create(body);
  if (!save) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Something happened wrong');
  }
  res.status(httpStatus.CREATED).json({ report: save });
});

const listReport = catchAsync(async (req, res) => {
  const findReport = await Report.find();

  if (!findReport) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No reports found');
  }
  res.status(httpStatus.OK).json(findReport);
});

const getReport = catchAsync(async (req, res) => {
  const { id } = req.query;

  const findReportOne = await Report.findOne({ id });

  if (!findReportOne) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No reports found');
  }
  res.status(httpStatus.OK).json({ findReportOne });
});

const updateReport = catchAsync(async (req, res) => {
  const { id } = req.query;
  const { body } = req;

  const findReportOne = await Report.findOne({ id });

  if (!findReportOne) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No reports found');
  }

  const update = await Report.updateOne(id, body);
  res.status(httpStatus.OK).json({ updateReport: update });
});

const deleteReport = catchAsync(async (req, res) => {
  const { id } = req.query;

  const findReportOne = await Report.findOne({ id });

  if (!findReportOne) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No reports found');
  }

  const deleteRepor = await Report.deleteOne(id);
  res.status(httpStatus.OK).json({ deleteRepor });
});

module.exports = { expenseReport, listReport, getReport, updateReport, deleteReport };
