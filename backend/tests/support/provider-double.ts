// A deterministic in-process fixture, never evidence of a real provider adapter.
export function createNotificationDouble() {
  const deliveries: { to: string; text: string }[] = [];
  return {
    deliveries,
    async send(message: { to: string; text: string }) {
      if (!/^[^@\s]+@[^@\s]+\.invalid$/.test(message.to))
        throw new Error("Synthetic .invalid recipients only");
      deliveries.push({ ...message });
      return { id: `synthetic-${deliveries.length}`, accepted: true };
    },
  };
}
