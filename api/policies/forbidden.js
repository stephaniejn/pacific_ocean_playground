module.exports = function(req, res, next) {
	return res.forbidden('You are not permitted to perform this action.');
}