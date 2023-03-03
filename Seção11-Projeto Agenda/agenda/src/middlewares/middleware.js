exports.middlewareGlobal = (req, res, next)=>{
    res.locals.user= req.session.user
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    next()
}

exports.outroMiddleware = (requisição, resposta, next)=>{
    console.log('Outro Middleware')
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404')
    }
    next()
    
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };


exports.loginRequired = (req, res, next) =>{
    if(!req.session.user){
        req.flash('errors', 'Voce precisa fazer login')
        req.session.save(() =>  res.redirect('/login/index'))
        return
    }

    next()
}

