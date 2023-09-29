const { User } = require('../models')

const adminController = {
  
  adminGetUsers: async (req, res, next) => {
    try {
      const users = await User.findAll({
      raw: true,
      nest: true
      })
      return res.render('users/admin', { users , role: 'admin'})
    } catch {
      return next(err)
    }
  },
  deleteUsers: async (req, res, next) => {
    try {
      console.log(727)
      const userId = req.params.id
      const test = await User.destroy({
        where: {
          id: userId
        },
        raw: true,
        nest: true
      })
      req.flash('success_message','成功刪除')
      return res.redirect('back')
    } catch {
      return next(err)
    }
  }

}

module.exports = adminController