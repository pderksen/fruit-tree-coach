/**
 * Notification helpers — scaffolded for future use.
 * These will be connected to real task data in a later phase.
 *
 * expo-notifications is imported lazily so the module doesn't load at
 * startup in Expo Go, which avoids the "not fully supported" warnings.
 */

async function getNotifications() {
  return await import("expo-notifications");
}

/** Schedule a local notification N days before a task's due date. */
export async function scheduleTaskReminder(
  taskTitle: string,
  dueDate: Date,
  daysBefore: number,
): Promise<string> {
  const Notifications = await getNotifications();

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
  const Notifications = await getNotifications();
  await Notifications.cancelAllScheduledNotificationsAsync();
}

/** List all currently scheduled notifications. */
export async function getScheduledReminders() {
  const Notifications = await getNotifications();
  return Notifications.getAllScheduledNotificationsAsync();
}
