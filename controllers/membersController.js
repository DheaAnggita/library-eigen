const { Member } = require('../models');
const moment = require('moment')
const membersController = {
  async createMember(req, res) {
    try {
      const { name } = req.body;
      let newCode;
      if(!name){
        return res.status(400).json({
            code: 400,
            message: 'Name is required',
            data: null
        });
      }
      const maxMember = await Member.findOne({
        order: [
            ['code', 'DESC']
        ]
      });
      if(maxMember && maxMember.code) {
          const maxCodeNumber = parseInt(maxMember.code.substring(1));
          newCode = `M${String(maxCodeNumber + 1).padStart(3, '0')}`;
      } else {
          newCode = 'M001';
      }
      const member = await Member.create({
        code: newCode,
        name
      });
      return res.status(201).json({
        code: 201,
        message: 'Member created successfully',
        data: member
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error',
        data: null
      });
    }
  },
  
  async getMembers(req, res) {
    try {
      const { code, name } = req.query;
      let members;
      if(code) {
        members = await Member.findAll({where: {code}});
      } else if(name) {
        members = await Member.findAll({where: {name}});
      } else {
        members = await Member.findAll();
      }   
      res.status(200).json({
        code: 200,
        message: 'Get Members Success',
        data: members
      });
    } catch (error) {
      res.status(500).json({
        code: 500,
        message: 'Internal server error',
        data: null
      });
    }
  },

  async getMember(req, res) {
    try {
      const member = await Member.findOne({ where: { id: req.params.id } });
      if (!member) {
          return res.status(404).json({
          code: 404,
          message: 'Member not found',
          data: null
          });
      }
      return res.status(200).json({
        code: 200,
        message: 'Get Member Success',
        data: member
      });
    } catch (error) {
      res.status(500).json({
        code: 500,
        message: 'Internal server error',
        data: null
      });
    }
  },

  async putMember(req, res) {
    try {
      const { name } = req.body;
      const member = await Member.findByPk(req.params.id);
      if (!member) {
        return res.status(404).json({
          code: 404,
          message: 'Member not found',
          data: null
        });
      }
      if(!name){
        return res.status(400).json({
            code: 400,
            message: 'Name is required',
            data: null
        });
      }
      await member.update({
        name,
      });
      return res.status(201).json({
        code: 201,
        message: 'Member updated successfully',
        data: member
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error',
        data: null
      });
    }
  },

  async deleteMember(req, res) {
    try {
      const member = await Member.findByPk(req.params.id);
      if (!member) {
        return res.status(404).json({
          code: 404,
          message: 'Member not found',
          data: null
        });
      }
      await member.destroy();
      return res.json({
        code: 200,
        message: 'Member deleted successfully',
        data: null
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error',
        data: null
      });
    }
  },
};

module.exports = membersController;
