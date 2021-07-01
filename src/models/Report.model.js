const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema(
  {
    concept: {
      type: String,
      required: true,
    },
    dateFrom: {
      type: Date,
      required: true,
    },
    dateTo: {
      type: Date,
      required: true,
    },
    employeeInformation: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      department: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      supervisor: {
        type: String,
        required: true,
        trim: true,
      },
    },
    spending: [
      {
        date: { type: Date, required: true },
        account: { type: Number, require: true },
        description: { type: String, require: false },
        total: { type: Number, require: true },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    approvedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Report
 */

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;
