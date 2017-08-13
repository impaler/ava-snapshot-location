"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
ava_1.default('test title', t => {
    t.snapshot({ foo: 'bar' });
    t.snapshot({ answer: 43 });
});
ava_1.default('another test', t => {
    t.snapshot(new Map());
});
//# sourceMappingURL=test.js.map