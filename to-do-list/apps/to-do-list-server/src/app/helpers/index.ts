import { prisma } from '../prisma';
import { customMessages } from '../errors';
import { IList } from '../types';

class Helpers {
  public async createFirstListIfItDoesntExist(): Promise<void> {
    try {
      const list: IList | null = await prisma.list.findFirst();

      if (list) {
        console.log(customMessages.ENTITY_ALREADY_EXISTS);
        return;
      }

      await prisma.list.create({ data: { name: 'default' } });

      console.log(customMessages.ENTITY_HAS_CREATED);
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export const helpersService = new Helpers();
