export interface IProfessionalQualification {
  applicantType:string;
  fresher:{
    familiarTech:any[];
    otherFamiliartech:string;
    zeusTestBool:boolean;
    previouslyAppliedRole:string;
  },
  experienced:{
    yearOfExperience:number | undefined;
    currentCTC:number | undefined;
    expectedCTC:number | undefined;
    expertisedTech:any[];
    otherExpertisedTech:string;
    familiarTech:any[];
    otherFamiliartech:string;
    onNoticePeriod:boolean;
    noticePeriodEndDate:string;
    noticePeriodDuration:number | undefined;
    zeusTestBool:boolean;
    previouslyAppliedRole:string;
  }
}
