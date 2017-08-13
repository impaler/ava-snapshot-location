"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
ava_1.default('top level test title', t => {
    t.snapshot({ foo: 'bar' });
    t.snapshot({ answer: 42 });
});
ava_1.default('another top level test', t => {
    t.snapshot(new Map());
});
//# sourceMappingURL=test.js.map