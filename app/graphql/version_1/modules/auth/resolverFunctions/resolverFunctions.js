"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.loginUser = exports.registerUser = exports.user = exports.users = void 0;
require("dotenv").config({ path: "src/.env" });
const bcrypt = __importStar(require("bcryptjs"));
const index_model_1 = require("../../../../../models/index.model");
const userValidation_1 = require("../validations/userValidation");
const token_1 = require("../token/token");
exports.users = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_model_1.model.user.findAll();
});
exports.user = (root, args) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield index_model_1.model.user.findById(args.id);
    return user;
});
exports.registerUser = (root, args) => __awaiter(void 0, void 0, void 0, function* () {
    // validate the data coming in from the graphql request using Joi package
    const { error } = userValidation_1.RegisterValidation(args);
    // hash the user password using bcrypt
    const salt = yield bcrypt.genSalt(10);
    args.password = yield bcrypt.hash(args.password, salt);
    // since email will be unique, check if email exists
    const findEmail = yield index_model_1.model.user.findByEmail(args.email);
    // username will be uinique too, check if it exists
    const findUsername = yield index_model_1.model.user.findOne({ username: args.username });
    // complete validation check
    if (findEmail) {
        const success = false;
        const message = "Email already exists, choose another one";
        return { success, message };
    }
    else if (findUsername) {
        const success = false;
        const message = "username already exists, choose another one";
        return { success, message };
    }
    else if (error) {
        const success = false;
        const message = error.details[0].message;
        return { success, message };
    }
    else {
        yield index_model_1.model.user.insertUser(args);
        const success = true;
        const message = "Account created successfully";
        const newUser = Object.assign({}, args);
        return { success, message, newUser };
    }
});
// Login user resolver
exports.loginUser = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield index_model_1.model.user.findByEmail(args.email);
    const { error } = userValidation_1.LoginValidation(args);
    if (!user) {
        return { success: false, message: "email does not exists" };
    }
    else if (error) {
        const success = false;
        const message = "Email or password is invalid";
        return { success, message };
    }
    else {
        const validUser = yield bcrypt.compare(args.password, user.password);
        if (validUser) {
            // create and assign token
            const token = yield token_1.issueTokens({
                id: user.id,
                username: user.username,
                email: user.email,
            });
            const auth = Object.assign({ user: user }, token);
            return { success: true, message: "logged in", auth: auth };
        }
        else {
            return { success: false, message: "Invalid password" };
        }
    }
});
exports.refreshToken = () => __awaiter(void 0, void 0, void 0, function* () { });
