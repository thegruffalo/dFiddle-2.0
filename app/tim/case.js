define([],function(){
function Test(){
  this.clientId = null;
  this.caseId = null;
}
Test.prototype.activate = function(clientId, caseId){
  this.clientId = clientId;
  this.caseId = caseId;
}

return Test;

});
