export default class ValidateError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'ValidateError';
  }
}
