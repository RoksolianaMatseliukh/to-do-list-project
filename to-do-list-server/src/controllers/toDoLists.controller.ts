import { NextFunction, Request, Response } from 'express';

import { prisma } from '../prisma';

class ToDoListsController {
    public async getAll(_: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const toDoLists = await prisma.list.findMany();

            res.json(toDoLists);
        } catch (e: any) {
            next(e);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const newList = await prisma.list.create({ data: req.body });

            res.json(newList);
        } catch (e: any) {
            next(e);
        }
    }

    public async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { listId } = req.params;

            const { id } = await prisma.list.delete({
                where: { id: +listId },
            });

            res.json({ id });
        } catch (e: any) {
            next(e);
        }
    }
}

export const toDoListsController = new ToDoListsController();
