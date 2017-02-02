module.exports = {
    verify : function(req, res, next) {
      if (req.session.email === undefined) {
          console.log("loged out");
            // res.render('login', { title: 'session expired login again!' });
          // res.send("expired");
          res.redirect('/login');
      }
      next();

    }
};
