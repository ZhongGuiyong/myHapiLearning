const Wreck = require("wreck")
exports.home = function(request, reply) {

  const apiUrl = this.apiBaseUrl + '/recipes';

  Wreck.get(apiUrl, {json: true}, (err, res, payload) =>{
    if (err) throw err;
    // console.log(request.auth.credentials)
    reply.view('index', {recipes: payload, user: request.auth.credentials})
  })
};

exports.viewRecipe = function(request, reply) {

  const apiUrl = this.apiBaseUrl + '/recipes/' + request.params.id;

  Wreck.get(apiUrl, {json: true}, (err, res, payload) =>{
    if (err) throw err;
    // console.log(payload)
    reply.view('recipe', {recipe: payload})
  })
};


exports.login = function (request, reply) {
  reply.view('login')
}