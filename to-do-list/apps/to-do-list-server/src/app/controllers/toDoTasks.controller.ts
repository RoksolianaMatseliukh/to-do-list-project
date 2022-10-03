import { NextFunction, Request, Response } from 'express';

import { prisma } from '../prisma';
import { Task } from '../../../../../libs/types';

class ToDoTasksController {
  public async getAll(_: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const toDoTasks: Task[] = await prisma.task.findMany();

      res.json(toDoTasks);
    } catch (e: any) {
      next(e);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const newTask: Task = await prisma.task.create({ data: req.body });

      res.json(newTask);
    } catch (e: any) {
      next(e);
    }
  }

  public async updateName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body: { name }, params: { taskId } } = req;

      const updatedTask: Task = await prisma.task.update({
        where: { id: +taskId },
        data: { name }
      });

      res.json(updatedTask);
    } catch (e: any) {
      next(e);
    }
  }

  public async updateIsDone(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { isDone, params: { taskId } } = req;

      const updatedTask: Task = await prisma.task.update({
        where: { id: +taskId },
        data: { isDone: !isDone }
      });

      res.json(updatedTask);
    } catch (e: any) {
      next(e);
    }
  }

  public async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { taskId } = req.params;

      const { id }: Task = await prisma.task.delete({
        where: { id: +taskId }
      });

      res.json({ id });
    } catch (e: any) {
      next(e);
    }
  }
}

export const toDoTasksController = new ToDoTasksController();
