import express from "express";
import { getAllUsers } from "../controllers/usersController.js";

const router = express.Router();
/**
 * @swagger
 * /api/{name}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true;
 *         description: username
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: All users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:                    
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 *                     id:
 *                       type: string
 *                       description: The user ID.
 *                       example: dkjiak-weiht398u48
 *                     date:
 *                        type: string
 *                        description: time user created
 *                        example: Thu Jan 13 2022 15:25:46 GMT+0300 (East Africa Time)
 *                      
 * 
 *                     
 */

router.get("/:name", getAllUsers);
export default router;
