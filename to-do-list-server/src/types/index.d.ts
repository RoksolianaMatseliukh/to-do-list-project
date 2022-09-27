// export {};
export * from './List';
export * from './Task';

declare global {
    namespace Express {
        interface Request {
            isDone: boolean;
        }
    }
}