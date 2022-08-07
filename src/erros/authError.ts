export class authError extends Error {
    constructor() {
        super("Error with authentication token")
    }
}