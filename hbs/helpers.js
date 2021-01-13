const hbs = require('hbs');


//HELPERS

hbs.registerHelper('getanio', () => {
    return new Date().getFullYear();
});


hbs.registerHelper('getfecha', () => {
    let now= new Date();
    if(now.getUTCMonth()+1<10){
        var dia = `${ now.getFullYear()}-0${ now.getUTCMonth()+1}-${now.getDate()}`
    }else{
        var dia = `${ now.getFullYear()}-${ now.getUTCMonth()+1}-${now.getDate()}` 
    }
    
    return dia;
});

hbs.registerHelper('when', function(predicate, options) {
    var declarations = '';
    for (var field in this) declarations += field + ' = this.' + field + ',';
    if (eval(declarations + predicate)) { return options.fn(this); }
});




hbs.registerHelper('ifvalue', function(conditional, options) {
    if (options.hash.value === conditional) {
        return options.fn(this)
    } else {
        return options.inverse(this);
    }
});