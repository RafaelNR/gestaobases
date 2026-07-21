"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get softDelete () {
        return softDelete;
    },
    get softDeleteMany () {
        return softDeleteMany;
    }
});
const _client = require("../../../../generated/prisma/client");
const softDelete = _client.Prisma.defineExtension({
    name: 'softDelete',
    model: {
        $allModels: {
            async delete (where) {
                const context = _client.Prisma.getExtensionContext(this);
                return context.update({
                    where,
                    data: {
                        deleted_at: new Date()
                    }
                });
            }
        }
    }
});
const softDeleteMany = _client.Prisma.defineExtension({
    name: 'softDeleteMany',
    model: {
        $allModels: {
            async deleteMany (where) {
                const context = _client.Prisma.getExtensionContext(this);
                return context.updateMany({
                    where,
                    data: {
                        deleted_at: new Date()
                    }
                });
            }
        }
    }
}); // //extension for filtering soft deleted rows from queries
 // export const filterSoftDeleted = Prisma.defineExtension({
 //   name: 'filterSoftDeleted',
 //   query: {
 //     $allModels: {
 //       async $allOperations({ model, operation, args, query }) {
 //         if (
 //           operation === 'findUnique' ||
 //           operation === 'findFirst' ||
 //           operation === 'findMany'
 //         ) {
 //           args.where = { ...args.where, deleted_at: null };
 //           return query(args);
 //         }
 //         return query(args);
 //       },
 //     },
 //   },
 // });

//# sourceMappingURL=prisma.extensions.js.map