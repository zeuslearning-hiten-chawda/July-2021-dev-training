/** @format */
import db from "../util/helper";
import { EducationalQualification } from "./educational-qualification.model";
import PersonalInformation from "./personal-information.model";
import { ProfessionalQualification } from "./professional-qualification.model";
export class Register {
  static addUser(
    userData: PersonalInformation,
    educationalData: EducationalQualification,
    professionalData: ProfessionalQualification
  ) {
    if (professionalData.applicantType !== "Fresher") {
      return db.execute(
        "CALL AddUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          userData.firstName,
          userData.lastName,
          userData.email,
          userData.phoneCode,
          userData.phoneNumber,
          userData.displayPicture,
          userData.portfolioURL,
          userData.referral,
          userData.subscription,
          "abcd1234",
          0,
          null,
          null,
          userData.jobRoles.join(","),
          userData.resume,
          educationalData.percentage,
          educationalData.yearOfPassing,
          educationalData.qualification,
          educationalData.college,
          educationalData.stream,
          professionalData.applicantType,
          professionalData.zeusTestBool,
          professionalData.previouslyAppliedRole,
          professionalData.familiarTech.join(","),
          professionalData.yearOfExperience,
          professionalData.currentCTC,
          professionalData.expectedCTC,
          professionalData.onNoticePeriod,
          professionalData.noticePeriodEndDate,
          professionalData.noticePeriodDuration,
          professionalData.expertisedTech?.join(","),
        ]
      );
    } else {
      return db.execute(
        "CALL AddUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          userData.firstName,
          userData.lastName,
          userData.email,
          userData.phoneCode,
          userData.phoneNumber,
          userData.displayPicture,
          userData.portfolioURL,
          userData.referral,
          userData.subscription,
          "abcd1234",
          0,
          null,
          null,
          userData.jobRoles.join(","),
          userData.resume,
          educationalData.percentage,
          educationalData.yearOfPassing,
          educationalData.qualification,
          educationalData.college,
          educationalData.stream,
          professionalData.applicantType,
          professionalData.zeusTestBool,
          professionalData.previouslyAppliedRole,
          professionalData.familiarTech.join(","),
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ]
      );
    }
  }

  // static addPersonalInformation(user: PersonalInformation) {
  //   return db.execute(
  //     "CALL AddPersonalInformation(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
  //     [
  //       "@out",
  //       user.firstName,
  //       user.lastName,
  //       user.email,
  //       user.phoneCode,
  //       user.phoneNumber,
  //       user.displayPicture,
  //       user.portfolioURL,
  //       user.referral,
  //       user.subscription,
  //       "zeus@123",
  //       null,
  //       null,
  //       0,
  //       null,
  //       null,
  //       user.jobRoles.join(","),
  //       user.resume,
  //     ]
  //   );
  // }

  // static addFresher(data: ProfessionalQualification) {
  //   if (data.applicantType === "Fresher") {
  //     return db.execute(
  //       "CALL AddProfessionalQualification(?,?,?,?,?,?,?,?,?,?,?,?)",
  //       [
  //         "@out",
  //         data.applicantType,
  //         data.zeusTestBool,
  //         data.previouslyAppliedRole,
  //         data.familiarTech.join(","),
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //       ]
  //     );
  //   } else {
  //     return db.execute(
  //       "CALL AddProfessionalQualification(?,?,?,?,?,?,?,?,?,?,?,?)",
  //       [
  //         "@out",
  //         data.applicantType,
  //         data.zeusTestBool,
  //         data.previouslyAppliedRole,
  //         data.familiarTech.join(","),
  //         data.yearOfExperience,
  //         data.currentCTC,
  //         data.expectedCTC,
  //         data.onNoticePeriod,
  //         data.noticePeriodEndDate,
  //         data.noticePeriodDuration,
  //         data.expertisedTech?.join(","),
  //       ]
  //     );
  //   }
  // }

  // static addEducationalQualification(data: EducationalQualification) {
  //   return db.execute("CALL AddEducationalQualification(?,?,?,?,?,?)", [
  //     "@out",
  //     data.percentage,
  //     data.yearOfPassing,
  //     data.qualification,
  //     data.college,
  //     data.stream,
  //   ]);
  // }
}

export default Register;
