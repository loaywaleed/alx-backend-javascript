export default function returnHowManyArguments(...args) {
  let numberOfArgs = 0;
  for (let i = 0; i < args.length; i += 1) {
    numberOfArgs += 1;
  }
  return numberOfArgs;
}
