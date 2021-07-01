const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const reportValidation = require('../../validations/report.validation');
const reportController = require('../../controllers/report.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(reportValidation.createReport), reportController.expenseReport)
  .get(auth(), reportController.listReport);
router
  .route('/:id')
  .get(auth(), validate(reportValidation.getReport), reportController.getReport)
  .put(auth(), validate(reportValidation.updateReport), reportController.updateReport)
  .delete(auth(), validate(reportValidation.deleteReport), reportController.deleteReport);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Report
 *   description: Rerpot
 */

/**
 * @swagger
 * /report:
 *   post:
 *     summary: Create a report
 *     description: Create other users.
 *     tags: [Report]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *
 *   get:
 *     summary: Get all report
 *     description: All report.
 *     tags: [Report]
 *     security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Get a Report
 *     tags: [Report]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *
 *   put:
 *     summary: Update a Report
 *     tags: [Report]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *
 *   delete:
 *     summary: Delete a Report
 *     tags: [Report]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
