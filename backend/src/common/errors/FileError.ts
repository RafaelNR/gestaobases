export default class FileError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'FileError';
  }
}
