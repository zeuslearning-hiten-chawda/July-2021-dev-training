/** @format */

export class EducationalQualification {
  private _percentage: number;
  private _yearOfPassing: number;
  private _qualification: number;
  private _stream: number;
  private _college: number;
  private _otherCollege: string;
  private _collegeLocation: string;

  constructor(
    percentage: number,
    yearOfPassing: number,
    qualification: number,
    stream: number,
    college: number,
    otherCollege: string,
    collegeLocation: string
  ) {
    this._percentage = percentage;
    this._yearOfPassing = yearOfPassing;
    this._qualification = qualification;
    this._stream = stream;
    this._college = college;
    this._otherCollege = otherCollege;
    this._collegeLocation = collegeLocation;
  }

  public get percentage(): number {
    return this._percentage;
  }

  public set percentage(percentage: number) {
    this._percentage = percentage;
  }

  public get yearOfPassing(): number {
    return this._yearOfPassing;
  }

  public set yearOfPassing(yearOfPassing: number) {
    this._yearOfPassing = yearOfPassing;
  }

  public get qualification(): number {
    return this._qualification;
  }

  public set qualification(qualification: number) {
    this._qualification = qualification;
  }

  public get stream(): number {
    return this._stream;
  }

  public set stream(stream: number) {
    this._stream = stream;
  }

  public get college(): number {
    return this._college;
  }

  public set college(college: number) {
    this._college = college;
  }

  public get otherCollege(): string {
    return this._otherCollege;
  }

  public set otherCollege(otherCollege: string) {
    this._otherCollege = otherCollege;
  }

  public get collegeLocation(): string {
    return this._collegeLocation;
  }

  public set collegeLocation(collegeLocation: string) {
    this._collegeLocation = collegeLocation;
  }
}

export default EducationalQualification