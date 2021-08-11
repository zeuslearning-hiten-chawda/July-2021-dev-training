import { Injectable } from '@angular/core';
import { IEducationalQualification } from '../models/educational-qualification.model';
import { IPersonalInformation } from '../models/person-information.model';
import { IProfessionalQualification } from '../models/professional-qualification.model';
import { IWalkIn } from '../models/walk-in.model';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  yearOfPassingFetched = ['2017', '2018', '2019', '2020', '2021'];
  qualificationFetched = [
    'Bachelor in Technology (B.Tech)',
    'Master in Technology (M.Tech)',
    'Bachelor in Engineering (M.E)',
    'Master in Engineering (B.E)',
  ];
  streamFetched = [
    'Information Technology',
    'Computer',
    'Electronics',
    'Electronics & Telecommunication',
  ];
  collegeFetched = [
    'Pune Institute of Technology (PIT)',
    'Shah & Anchor (SAKEC)',
    'K J Somaiya (KJCOE)',
  ];
  applicantTypeArray = ['Fresher', 'Experienced'];
  technologyFetched = [
    'Javascript',
    'Angular JS',
    'React',
    'Node JS',
    'Others',
  ];
  noticePeriodDurationFetched = ['2 months', '3 months', '4 months'];
  isFresher: boolean = true;
  personalInformationVariable: IPersonalInformation = {
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '',
    phoneNumber: '',
    resume: '',
    portfolioURL: '',
    jobRoles: [],
    referral: '',
    displayPicture: '',
    subscription: false,
  };
  qualificationVariable: {
    educationalQualification: IEducationalQualification;
    professionalQualification: IProfessionalQualification;
  } = {
    educationalQualification: {
      percentage: '',
      yearOfPassing: this.yearOfPassingFetched[0],
      qualification: this.qualificationFetched[0],
      stream: this.streamFetched[0],
      college: this.collegeFetched[0],
      otherCollege: '',
      collegeLocation: '',
    },
    professionalQualification: {
      applicantType: this.applicantTypeArray[0],
      fresher: {
        familiarTech: [],
        otherFamiliartech: '',
        zeusTestBool: false,
        previouslyAppliedRole: '',
      },
      experienced: {
        yearOfExperience: '',
        currentCTC: '',
        expectedCTC: '',
        expertisedTech: [],
        otherExpertisedTech: '',
        familiarTech: [],
        otherFamiliartech: '',
        onNoticePeriod: false,
        noticePeriodEndDate: '',
        noticePeriodDuration: this.noticePeriodDurationFetched[0],
        zeusTestBool: false,
        previouslyAppliedRole: '',
      },
    },
  };
  walkInVariable: IWalkIn[] = [
    {
      title: 'Walk In For Designer Job Role',
      startDate: '10-jul-2021',
      endDate: '11-jul-2021',
      jobRoles: [
        {
          title: 'Instructional Designer',
          url: 'Instructional Designer.svg',
        },
        {
          title: 'Software Engineer',
          url: 'Software Engineer.svg',
        },
        {
          title: 'Software Quality Engineer',
          url: 'Software Quality Engineer.svg',
        },
      ],
      city: 'Mumbai',
      internshipInformation: 'Internship Oppotunity for MCA Students',
      expiryDate: 'Expires in 10 days',
    },
    {
      title: 'Walk In For Designer Job Role',
      startDate: '10-jul-2021',
      endDate: '11-jul-2021',
      jobRoles: [
        {
          title: 'Instructional Designer',
          url: 'Instructional Designer.svg',
        },
        {
          title: 'Software Engineer',
          url: 'Software Engineer.svg',
        },
      ],
      city: 'Mumbai',
      expiryDate: 'Expires in 5 days',
    },
    {
      title: 'Walk In For Designer Job Role',
      startDate: '10-jul-2021',
      endDate: '11-jul-2021',
      jobRoles: [
        {
          title: 'Instructional Designer',
          url: 'Instructional Designer.svg',
        },
        {
          title: 'Software Engineer',
          url: 'Software Engineer.svg',
        },
        {
          title: 'Software Quality Engineer',
          url: 'Software Quality Engineer.svg',
        },
      ],
      city: 'Mumbai',
      expiryDate: 'Expires in 5 days',
    },
  ];
  yesNoArray = [
    true,
    false
  ]

  constructor() {}

  // get isFresher():boolean{
  //   return this._isFresher;
  // }

  // set isFresher(data:boolean){
  //   this._isFresher = data;
  // }
}
