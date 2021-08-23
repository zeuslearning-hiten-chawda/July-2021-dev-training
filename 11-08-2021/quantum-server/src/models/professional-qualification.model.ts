/** @format */

export class ProfessionalQualification {
  private _applicantType: string;
  private _familiarTech: any[];
  private _otherFamiliartech: string;
  private _zeusTestBool: boolean;
  private _previouslyAppliedRole: string;
  private _yearOfExperience: number | null;
  private _currentCTC: number | null;
  private _expectedCTC: number | null;
  private _expertisedTech: any[] | null;
  private _otherExpertisedTech: string | null;
  private _onNoticePeriod: boolean | null;
  private _noticePeriodEndDate: string | null; 
  private _noticePeriodDuration: number | null;

  constructor(
    applicantType: string,
    familiarTech: any[],
    otherFamiliartech: string,
    previouslyAppliedRole: string,
    zeusTestBool: boolean,
    yearOfExperience: number | null,
    currentCTC: number | null,
    expectedCTC: number | null,
    expertisedTech: any[] | null,
    otherExpertisedTech: string | null,
    onNoticePeriod: boolean | null,
    noticePeriodEndDate: string | null,
    noticePeriodDuration: number | null
  ) {
    this._applicantType = applicantType;
    this._familiarTech = familiarTech;
    this._otherFamiliartech = otherFamiliartech;
    this._zeusTestBool = zeusTestBool;
    this._previouslyAppliedRole = previouslyAppliedRole;
    this._yearOfExperience = yearOfExperience;
    this._currentCTC = currentCTC;
    this._expectedCTC = expectedCTC;
    this._expertisedTech = expertisedTech;
    this._otherExpertisedTech = otherExpertisedTech;
    this._onNoticePeriod = onNoticePeriod;
    this._noticePeriodEndDate = noticePeriodEndDate;
    this._noticePeriodDuration = noticePeriodDuration;
  }

  public get yearOfExperience(): number | null {
    return this._yearOfExperience;
  }

  public set yearOfExperience(yearOfExperience: number | null) {
    this._yearOfExperience = yearOfExperience;
  }

  public get currentCTC(): number | null {
    return this._currentCTC;
  }

  public set currentCTC(currentCTC: number | null) {
    this._currentCTC = currentCTC;
  }

  public get expectedCTC(): number | null {
    return this._expectedCTC;
  }

  public set expectedCTC(expectedCTC: number | null) {
    this._expectedCTC = expectedCTC;
  }

  public get expertisedTech(): any[] | null {
    return this._expertisedTech;
  }

  public set expertisedTech(expertisedTech: any[] | null) {
    this._expertisedTech = expertisedTech;
  }

  public get otherExpertisedTech(): string | null {
    return this._otherExpertisedTech;
  }

  public set otherExpertisedTech(otherExpertisedTech: string | null) {
    this._otherExpertisedTech = otherExpertisedTech;
  }

  public get onNoticePeriod(): boolean | null {
    return this._onNoticePeriod;
  }

  public set onNoticePeriod(onNoticePeriod: boolean | null) {
    this._onNoticePeriod = onNoticePeriod;
  }

  public get noticePeriodEndDate(): string | null {
    return this._noticePeriodEndDate;
  }

  public set noticePeriodEndDate(noticePeriodEndDate: string | null) {
    this._noticePeriodEndDate = noticePeriodEndDate;
  }

  public get noticePeriodDuration(): number | null {
    return this._noticePeriodDuration;
  }

  public set noticePeriodDuration(noticePeriodDuration: number | null) {
    this._noticePeriodDuration = noticePeriodDuration;
  }

  public get applicantType(): string {
    return this._applicantType;
  }

  public set applicantType(applicantType: string) {
    this._applicantType = applicantType;
  }

  public get familiarTech(): any[] {
    return this._familiarTech;
  }

  public set familiarTech(familiarTech: any[]) {
    this._familiarTech = familiarTech;
  }

  public get otherFamiliartech(): string {
    return this._otherFamiliartech;
  }

  public set otherFamiliartech(otherFamiliartech: string) {
    this._otherFamiliartech = otherFamiliartech;
  }

  public get zeusTestBool(): boolean {
    return this._zeusTestBool;
  }

  public set zeusTestBool(zeusTestBool: boolean) {
    this._zeusTestBool = zeusTestBool;
  }

  public get previouslyAppliedRole(): string {
    return this._previouslyAppliedRole;
  }

  public set previouslyAppliedRole(previouslyAppliedRole: string) {
    this._previouslyAppliedRole = previouslyAppliedRole;
  }
}

export default ProfessionalQualification;
