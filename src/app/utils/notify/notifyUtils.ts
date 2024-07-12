import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotifyUtils {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBarStatusCode(statusCode: number): void {
    let message = '';

    switch (statusCode) {
      case 200:
        message = 'Operation success';
        break;
      case 401:
        message = 'No auth';
        break;
      case 403:
        message = 'Forbidden';
        break;
      case 404:
        message = 'Not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
      default:
        message = 'Unknown error';
        break;
    }

    this._snackBar.open(message, 'Close', {
      duration: 4000,
    });
  }
}
