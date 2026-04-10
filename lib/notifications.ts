import * as Notifications from "expo-notifications";

/**
 * Notification helpers — scaffolded for future use.
 * These will be connected to real task data in a later phase.
 */

/** Schedule a local notification N days before a task's due date. */
export async function scheduleTaskReminder(
  taskTitle: string,
  dueDate: Date,
  daysBefore: number,
): Promise<string> {
  const triggerDate = new Date(dueDate);
  triggerDate.setDate(triggerDate.getDate() - daysBefore);
  triggerDate.setHours(9, 0, 0, 0); // default to 9 AM

  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: "Fruit Tree Coach",
      body: `Upcoming: ${taskTitle}`,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: triggerDate,
    },
  });

  return id;
}

/** Cancel all scheduled notifications. */
export async function cancelAllReminders(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

/** List all currently scheduled notifications. */
export async function getScheduledReminders() {
  return Notifications.getAllScheduledNotificationsAsync();
}
