import { Status } from "../core/enums/status.enum";

export interface Task {
    id: string;
    name: string;
    description: string;
    status: Status;
  }