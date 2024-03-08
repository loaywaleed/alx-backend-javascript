export default function guardrail(mathFunction) {
  const queue = [];
  let msg;
  try {
    msg = mathFunction();
  } catch (error) {
    msg = `Error: ${error.message}`;
  }
  queue.push(msg);
  queue.push('Guardrail was processed');
  return queue;
}
