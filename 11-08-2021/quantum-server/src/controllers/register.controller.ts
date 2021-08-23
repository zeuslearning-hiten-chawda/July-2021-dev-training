/** @format */

import personalInformationSchema from "../schema/personal-information.schema";
import Register from "../models/register.model";
import PersonalInformation from "../models/personal-information.model";
import educationalQualificationSchema from "../schema/educational-qualification.schema";
import EducationalQualification from "../models/educational-qualification.model";
import professionQualificationSchema from "../schema/professional-qualification.schema";
import ProfessionalQualification from "../models/professional-qualification.model";

export class WalkinController {
  static postUser = async (req: any, res: any, next: any) => {
    try {
      const result1 = personalInformationSchema.validate(
        req.body.personalInformationVariable
      );
      if (result1.error) {
        res.status(400).send(result1.error.details[0].message);
        return;
      }

      const result2 = educationalQualificationSchema.validate(
        req.body.qualificationVariable.educationalQualification
      );
      if (result2.error) {
        res.status(400).send(result2.error.details[0].message);
        return;
      }

      const result3 = professionQualificationSchema.validate(
        req.body.qualificationVariable.professionalQualification
      );
      if (result3.error) {
        res.status(400).send(result3.error.details[0].message);
        return;
      }

      let object1 = new PersonalInformation(
        result1.value.firstName,
        result1.value.lastName,
        result1.value.email,
        result1.value.phoneCode,
        result1.value.phoneNumber,
        result1.value.resume,
        result1.value.portfolioURL,
        result1.value.referral,
        result1.value.displayPicture,
        result1.value.jobRoles,
        result1.value.subscription
      );

      let object2 = new EducationalQualification(
        result2.value.percentage,
        result2.value.yearOfPassing,
        result2.value.qualification,
        result2.value.stream,
        result2.value.college,
        result2.value.otherCollege,
        result2.value.collegeLocation
      );

      let object3 = new ProfessionalQualification(
        result3.value.applicantType,
        result3.value.familiarTech,
        result3.value.otherFamiliartech,
        result3.value.previouslyAppliedRole,
        result3.value.zeusTestBool,
        result3.value.yearOfExperience,
        result3.value.currentCTC,
        result3.value.expectedCTC,
        result3.value.expertisedTech,
        result3.value.otherExpertisedTech,
        result3.value.onNoticePeriod,
        result3.value.noticePeriodEndDate,
        result3.value.noticePeriodDuration
      );

      const data = await Register.addUser(object1, object2, object3);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  };

  // static postPersonalInformation = async (req: any, res: any, next: any) => {
  //   try {
  //     const result = personalInformationSchema.validate(req.body);

  //     if (result.error) {
  //       res.status(400).send(result.error.details[0].message);
  //       return;
  //     }
  //     let object = new PersonalInformation(
  //       result.value.firstName,
  //       result.value.lastName,
  //       result.value.email,
  //       result.value.phoneCode,
  //       result.value.phoneNumber,
  //       result.value.resume,
  //       result.value.portfolioURL,
  //       result.value.referral,
  //       result.value.displayPicture,
  //       result.value.jobRoles,
  //       result.value.subscription
  //     );

  //     const [data] = await Register.addPersonalInformation(object);
  //     res.status(200).send(data);
  //     // res.send(Grocery.fetchAll());
  //   } catch (err) {
  //     // res.status(200).send(typeof req.body.jobRoles.join(','));
  //     res.status(500).send(err);
  //   }
  // };

  // static postFresher = async (req: any, res: any, next: any) => {
  //   try {
  //     const result = professionQualificationSchema.validate(req.body);
  //     if (result.error) {
  //       res.status(400).send(result.error.details[0].message);
  //       return;
  //     }
  //     let object = new ProfessionalQualification(
  //       result.value.applicantType,
  //       result.value.familiarTech,
  //       result.value.otherFamiliartech,
  //       result.value.previouslyAppliedRole,
  //       result.value.zeusTestBool,
  //       result.value.yearOfExperience,
  //       result.value.currentCTC,
  //       result.value.expectedCTC,
  //       result.value.expertisedTech,
  //       result.value.otherExpertisedTech,
  //       result.value.onNoticePeriod,
  //       result.value.noticePeriodEndDate,
  //       result.value.noticePeriodDuration
  //     );
  //     const [data] = await Register.addFresher(object);
  //     res.status(200).send(data);
  //   } catch (err) {
  //     // res.status(200).send(typeof req.body.jobRoles.join(','));
  //     res.status(500).send(err);
  //   }
  // };

  // static postEducationalQualification = async (
  //   req: any,
  //   res: any,
  //   next: any
  // ) => {
  //   try {
  //     const result = educationalQualificationSchema.validate(req.body);
  //     if (result.error) {
  //       res.status(400).send(result.error.details[0].message);
  //       return;
  //     }
  //     let object = new EducationalQualification(
  //       result.value.percentage,
  //       result.value.yearOfPassing,
  //       result.value.qualification,
  //       result.value.stream,
  //       result.value.college,
  //       result.value.otherCollege,
  //       result.value.collegeLocation
  //     );
  //     const [data] = await Register.addEducationalQualification(object);
  //     res.status(200).send(data);
  //   } catch (err) {
  //     // res.status(200).send(typeof req.body.jobRoles.join(','));
  //     res.status(500).send(err);
  //   }
  // };
}

export default WalkinController;
