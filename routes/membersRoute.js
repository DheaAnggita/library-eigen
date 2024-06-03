/**
 * @swagger
 * 
 * tags:
 *   name: Members
 *   description: Members APIs
 * 
 */

const express = require('express');
const router = express.Router();
const membersController = require('../controllers/membersController');

/**
 * @swagger
 * /api/members:
 *   post:
 *     summary: Create a new meber
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Member created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *
 * /api/members/getmembers:
 *   get:
 *     summary: Get Members
 *     tags: [Members]
 *     parameters:
 *       - name: code
 *         in: query
 *         schema:
 *           type: string
 *       - name: name
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get Members Success
 *       500:
 *         description: Internal server error
 *
 * /api/members/getmember/{id}:
 *   get:
 *     summary: Get member by id
 *     tags: [Members]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The member id
 *     responses:
 *       200:
 *         description: Get Member Success
 *       404:
 *         description: Member not found
 *       500:
 *         description: Internal server error
 *
 * /api/members/{id}:
 *   put:
 *     summary: Update member by id
 *     tags: [Members]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The member id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Member updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Member not found
 *       500:
 *         description: Internal server error
 *
 * /api/members/delete/{id}:
 *   delete:
 *     summary: Delete member by id
 *     tags: [Members]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The member id
 *     responses:
 *       200:
 *         description: Member deleted successfully
 *       404:
 *         description: Member not found
 *       500:
 *         description: Internal server error
 */

router.post('/api/members', membersController.createMember);
router.get('/api/members/getmembers', membersController.getMembers);
router.get('/api/members/getmember/:id', membersController.getMember);
router.put('/api/members/:id', membersController.putMember);
router.delete('/api/members/delete/:id', membersController.deleteMember);

module.exports = router;