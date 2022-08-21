import { environment } from 'src/environments/environment';


export class DebugUtils {

  static logConsole(message: string) {
    if (environment.production) return;
    console.log(message);
  }

}
