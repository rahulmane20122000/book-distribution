import { ROLES } from "./roles.constants";
import { Role } from "./roles.type";


class RoleSchema {
    public static roleDb: Role[] = [
        new Role(ROLES.ADMIN, "ADMIN"),
        new Role(ROLES.DISTRIBUTOR, "DISTRIBUTOR"),
    
    ];

    getById(id:string) {
        return RoleSchema.roleDb.find(r => r.id === id);
    }
}

const roleSchema = new RoleSchema();

export default roleSchema;
