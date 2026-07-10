"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeleteMany = exports.softDelete = void 0;
const client_1 = require("../../../../generated/prisma/client");
exports.softDelete = client_1.Prisma.defineExtension({
    name: 'softDelete',
    model: {
        $allModels: {
            async delete(where) {
                const context = client_1.Prisma.getExtensionContext(this);
                return context.update({
                    where,
                    data: {
                        deleted_at: new Date(),
                    },
                });
            },
        },
    },
});
exports.softDeleteMany = client_1.Prisma.defineExtension({
    name: 'softDeleteMany',
    model: {
        $allModels: {
            async deleteMany(where) {
                const context = client_1.Prisma.getExtensionContext(this);
                return context.updateMany({
                    where,
                    data: {
                        deleted_at: new Date(),
                    },
                });
            },
        },
    },
});
//# sourceMappingURL=prisma.extensions.js.map