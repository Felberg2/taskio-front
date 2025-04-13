import { Status } from "../core/enums/status.enum";

export const StatusLabels: Record<Status, string> = {
  [Status.ToDo]: 'To Do',
  [Status.Doing]: 'Doing',
  [Status.Done]: 'Done',
  [Status.Canceled]: 'Canceled',
};
