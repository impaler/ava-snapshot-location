"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
ava_1.default('feature test title', t => {
    t.snapshot({ foo: 'bar' });
    t.snapshot({ answer: 40 });
});
ava_1.default('another feature test', t => {
    t.snapshot(new Map());
});
//# sourceMappingURL=test.js.map