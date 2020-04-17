'use strict';

let RoleSchema = require ('../models/Roles');

async function postRole(req,res){
    let role = req.body;
    console.log("Name: "+ role.name);
    console.log("Description: "+role.description);
    console.log("Options: "+role.options);

    let rol = new RoleSchema()

    console.log(rol)
        try{
            rol.name = rol.name
            rol.description = rol.description
            rol.options = rol.options
            await rol.save();
            return res.status(201).send({message: "Role added successfully"})
        }
        catch (err){
            res.status(500).send(err);
            console.log(err);
        }
}

async function getRoles (req, res){   
    let role = await RoleSchema.find().select('name');
    console.log(role);
    if(role) {
        res.status(200).json(role);
    } else {
        res.status(424).send({message: 'Roles error'});
    }
}

module.exports = {postRole, getRoles};