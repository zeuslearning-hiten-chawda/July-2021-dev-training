/** @format */

export class User {
  private _email: string;
  private _password_hash: string;

  constructor(email: string, password_hash: string) {
    this._email = email;
    this._password_hash = password_hash;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get password_hash(): string {
    return this._password_hash;
  }

  public set password_hash(password_hash: string) {
    this._password_hash = password_hash;
  }
}
