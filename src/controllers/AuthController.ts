// import { Request, Response } from "express";
// import Auth, { AuthData } from "../schemas/Auth";
// import User from "../schemas/User";

// import AuthDataModel from "../models/AuthDataModel";

// import Bcrypt from 'bcrypt';
// import HttpStatus from 'http-status-codes';
// import * as jwt from "jsonwebtoken";

// class AuthController {

//     public async login(req: Request<{}, {}, AuthDataModel>, res: Response): Promise<Response> {
//         const {email, password} = req.body;
//         const userDB = await Auth.findOne({email: email}).exec();
//         if(!userDB) return res.status(HttpStatus.UNAUTHORIZED).json({error: "LoginError"});
//         if(!Bcrypt.compareSync(password, userDB.password)) 
//             return res.status(HttpStatus.UNAUTHORIZED).json({error: "Password or Email Error"});

//         if(!process.env.SECRET) return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({error: "LoginError"});;
//         const token = jwt.sign(email, process.env.SECRET, {});

//         const userDetail = await User.findOne({email});
//         return res.status(HttpStatus.OK)
//             .json({
//                 message: `Welcome ${userDetail?.firstName} ${userDetail?.lastName}`,
//                 token: token
//             });
//     }

//     public async signUp(req: Request, res: Response): Promise<Response> {
//         const userData: AuthData = req.body;

//         const salt = Bcrypt.genSaltSync(8);
//         const hash = Bcrypt.hashSync(userData.password, salt);

//         userData.password = hash;

//         const userDb = await Auth.create(userData);

//         return res.json(userDb);
//     }
// }

// export default new AuthController();