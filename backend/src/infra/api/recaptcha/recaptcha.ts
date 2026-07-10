import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@src/common/types/env';

type GoogleResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
};

@Injectable()
export class RecaptchaService {
  private URL = 'https://www.google.com/recaptcha/api/siteverify';

  constructor(private configService: ConfigService<EnvironmentVariables>) { }

  // async exec(token: string, action: string) {
  //   const url = `${this.URL}?secret=${this.configService.get('RECAPTCHA_SERVER')}&response=${token}`;

  //   return await fetch(url, {
  //     method: 'post',
  //   })
  //     .then((response) => response.json())
  //     .then((google_response: GoogleResponse) => {
  //       // console.log('google_response', google_response, action);
  //       if (
  //         google_response.success &&
  //         google_response.action === action &&
  //         google_response.score >= 0.7
  //       ) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       return false;
  //     });
  // }
}
