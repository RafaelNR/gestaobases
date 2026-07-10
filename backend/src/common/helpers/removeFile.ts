import fs from 'fs';
import path from 'path';

export default (destination: string, filename: string) => {
  const file = path.resolve(destination, filename);

  if (fs.existsSync(file)) {
    fs.unlink(file, (err) => {
      if (err) {
        console.error(err);
        return err;
      }
    });
  }
};
