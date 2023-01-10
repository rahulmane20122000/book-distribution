export type RoleName = "DISTRIBUTOR" | "ADMIN";


export class Role {
  constructor(public id: string, public name: RoleName) {}
}
