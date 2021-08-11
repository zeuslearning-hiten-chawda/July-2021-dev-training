export interface IProfessionalQualification {
  applicantType:string;
  fresher:{
    familiarTech:any[];
    otherFamiliartech:string;
    zeusTestBool:boolean;
    previouslyAppliedRole:string;
  },
  experienced:{
    yearOfExperience:string;
    currentCTC:string;
    expectedCTC:string;
    expertisedTech:any[];
    otherExpertisedTech:string;
    familiarTech:any[];
    otherFamiliartech:string;
    onNoticePeriod:boolean;
    noticePeriodEndDate:string;
    noticePeriodDuration:string;
    zeusTestBool:boolean;
    previouslyAppliedRole:string;
  }
}
