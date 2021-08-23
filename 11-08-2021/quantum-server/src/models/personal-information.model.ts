/** @format */
export class PersonalInformation {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneCode: number;
  private _phoneNumber: number;
  private _resume: any;
  private _portfolioURL: string;
  private _referral: string;
  private _displayPicture: any;
  private _jobRoles: any[];
  private _subscription: boolean;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneCode: number,
    phoneNumber: number,
    resume: any,
    portfolioURL: string,
    referral: string,
    displayPicture: any,
    jobRoles: any[],
    subscription: boolean
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneCode = phoneCode;
    this._phoneNumber = phoneNumber;
    this._resume = resume;
    this._portfolioURL = portfolioURL;
    this._referral = referral;
    this._displayPicture = displayPicture;
    this._jobRoles = jobRoles;
    this._subscription = subscription;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get phoneCode(): number {
    return this._phoneCode;
  }

  public set phoneCode(phoneCode: number) {
    this._phoneCode = phoneCode;
  }

  public get phoneNumber(): number {
    return this._phoneNumber;
  }

  public set phoneNumber(phoneNumber: number) {
    this._phoneNumber = phoneNumber;
  }

  public get resume(): any {
    return this._resume;
  }

  public set resume(resume: any) {
    this._resume = resume;
  }

  public get portfolioURL(): string {
    return this._portfolioURL;
  }

  public set portfolioURL(portfolioURL: string) {
    this._portfolioURL = portfolioURL;
  }

  public get jobRoles(): any[] {
    return this._jobRoles;
  }

  public set jobRoles(jobRoles: any[]) {
    this._jobRoles = jobRoles;
  }

  public get referral(): string {
    return this._referral;
  }

  public set referral(referral: string) {
    this._referral = referral;
  }

  public get subscription(): boolean {
    return this._subscription;
  }

  public set subscription(subscription: boolean) {
    this._subscription = subscription;
  }

  public get displayPicture(): any {
    return this._displayPicture;
  }

  public set displayPicture(displayPicture: any) {
    this._displayPicture = displayPicture;
  }
}

export default PersonalInformation;
