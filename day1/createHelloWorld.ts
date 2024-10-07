function createHelloWorld(): (...args: any[]) => string {
  return function (...args): string {
    return "Hello World";
  };
}
