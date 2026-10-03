"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pets_1 = require("./data/pets");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.status(200).json(pets_1.pets);
});
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
