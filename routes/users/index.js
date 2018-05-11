var express = require('express');
var router = express.Router();
const connectSql = require('../../mysql/mysql');

/* GET home page. */
router.get('/a', function(req, res, next) {


	const sql = `select * from city where id >= ${req.query.id}`

	connectSql(sql, function(err, result, next) {
		let json = { data: result, error: 0, errmsg: '查询成功', }
		if (err) {
			json.error = 99999;
			if (!req.query.id.String) {
				json.errmsg = '请输入正确的id'
			}
			res.json(json)
			return
		} else {
			res.status(200);
			//res.send('hello, express')
			res.json({
				data: result,
				error: 0,
				errmsg: '查询成功',
			})
		}
	})
});
/* GET home page. */
router.get('/b', function(req, res, next) {
	const sql = `select * from city where id <= ${req.query.id}`
	connectSql(sql, function(err, result, next) {
		if (err) {
			console.log('失败:', err.message);
		} else {
			res.status(200);
			//res.send('hello, express')
			res.json({
				data: result,
				error: 0,
				errmsg: '查询成功',
			})
		}
	})
});

module.exports = router;