import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from '../models/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: 'Emma' },
      { id: 12, name: 'Hudson' },
      { id: 13, name: 'Olivia' },
      { id: 14, name: 'Anthony' },
      { id: 15, name: 'Abigail' },
      { id: 16, name: 'Samuel' },
      { id: 17, name: 'Harper' },
      { id: 18, name: 'Lucas' },
      { id: 19, name: 'Avery' },
      { id: 20, name: 'James' },
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // user id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}