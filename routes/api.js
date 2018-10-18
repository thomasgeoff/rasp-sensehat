var express			= require('express'),
	router  		= express.Router(),
	db				= require('../models'),
	dataHelpers 	= require('../helpers/data'),
	statsHelpers 	= require('../helpers/stats'),
	settingsHelpers = require('../helpers/settings');
/****
* C - Create
* R - Read
* U - Update
* D - Delete
****/
router.route('/data')
	.post(dataHelpers.getData)
	.get(dataHelpers.createData)
	.delete(dataHelpers.deleteData);

/*router.route('/data/:id')
	.get()
	.put()
	.delete();

router.route('/settings')
	.get()
	.put()

router.route('/statistics')
	.get()
	.put()
	.delete(); //reset */

module.exports = router;
