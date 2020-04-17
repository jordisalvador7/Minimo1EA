'use strict';

import express = require ("express");

let router = express.Router();
let rolesControl = require ("../controllers/roleControl");

router.post('/addRole', rolesControl.postRole);
router.get('/getRoles', rolesControl.getRoles);
router.put('/updateRole', rolesControl.updateRole);

module.exports = router;