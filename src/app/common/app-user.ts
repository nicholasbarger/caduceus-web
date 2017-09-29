export class AppUser {
    constructor(
        public created: Date,
        public firstName: string,
        public isActive: boolean,
        public lastName: string,
        public modified: Date = null,
        public tenantId: number,
        public searchContent: string) {
    }
}