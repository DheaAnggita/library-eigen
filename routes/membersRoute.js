const express = require('express');
const router = express.Router();
const membersController = require('../controllers/membersController');

router.post('/api/members', membersController.createMember);
router.get('/api/members', membersController.getMembers);
router.get('/api/members/:id', membersController.getMember);
router.put('/api/members/:id', membersController.putMember);
router.delete('/api/members/:id', membersController.deleteMember);

module.exports = router;